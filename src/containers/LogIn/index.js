import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    Button,
    Row,
    Col
} from 'reactstrap';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import _get from 'lodash/get';
import {bindActionCreators} from 'redux';
import ReduxInput from '../../components/ReduxInput';
import {signIn, reset} from '../../actions/appActions';

class LogIn extends React.Component {

    signIn = async () => {
        const response = await this.props.signIn();
        console.log('response ::: ', response);
        console.log(this.props);
        this.props.history.push('/create')
    }

    reset = async () => {
        const response = await this.props.reset();
        console.log('response ::: ', response);
    }

    render() {
        return (<div>
            <Card className={'sign-in-wrapper'}>
                <CardBody>
                    <CardTitle className={'sign-in-title'}>Welcome</CardTitle>
                    <ReduxInput size={12} name={'Email'} label={'Email'}/>
                    <ReduxInput size={12} name={'Password'} type={'password'} label={'Password'}/>
                    <Col md={12}>
                        <Row>
                            <Col md={6}>
                                <Button disabled={this.props.appBusy} block={true} color={'primary'} style={{
                                        marginTop: 15
                                    }} onClick={this.signIn}>
                                    {
                                        this.props.appBusy
                                            ? 'Loading...'
                                            : 'SIGN IN'
                                    }
                                </Button>
                            </Col>
                            <Col md={6}>
                                <Button disabled={this.props.appBusy} block={true} color={'link'} style={{
                                        marginTop: 15
                                    }} onClick={this.reset}>Forget Password?
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </CardBody>
            </Card>
        </div>)
    }
}

LogIn = reduxForm({form: 'logInForm'})(LogIn)

const mapStateToProps = state => {
    return {
        logIn: _get(state, 'form.logInForm.values', {}),
        appBusy: _get(state, 'app.appBusy', false)
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    signIn,
    reset
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
