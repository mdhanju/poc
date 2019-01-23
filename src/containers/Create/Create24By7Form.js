import React from 'react';
import {
    Card,
    CardBody,
    Row,
    Col,
    Button,
    Input,
    Alert
} from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm} from 'redux-form';
import ReduxInput from '../../components/ReduxInput';
import ReduxSelect from '../../components/ReduxSelect';
import _get from 'lodash/get';
import {createTwentyFourSeven} from '../../actions/searchActions';

class Create24By7Form extends React.Component {

    state = {
        success: false
    }

    handleClick = async (e) => {
        e.preventDefault();
        const payload = this.props.createSibelForm
        const response = await this.props.createTwentyFourSeven(payload);
        console.log('response :::: ', response);
        if (response.id) {
            this.setState({success: true})
        }
    }
    render() {
        const eobList = [
            {
                name: 'Yes',
                id: 'yes'
            }, {
                name: 'No',
                id: 'no'
            }
        ]
        return (<div>
            <Card>
                <CardBody>
                    <h2 className={'text-center'}>24 by 7 ticket</h2>
                    <Row>
                        {
                            this.state.success
                                ? <Col sm={12} style={{
                                            marginTop: 25
                                        }}>
                                        <Alert color="success">
                                            Case is submitted successfully
                                        </Alert>
                                    </Col>
                                : <Col sm={4}>
                                        <Row>
                                            <ReduxInput size={12} name={'checkNo'} label={'Check Number'}/>
                                            <ReduxInput size={12} name={'amount'} label={'Amount'}/>
                                            <ReduxInput size={12} name={'accountId'} label={'Account Id'}/>
                                            <ReduxInput type={'date'} size={12} name={'date'} label={'Start Date'}/>
                                            <ReduxSelect size={12} name={'eob'} items={eobList} placeholder={'EOB'} label={'EOB'}/>
                                            <ReduxInput size={12} name={'comment'} label={'Comment'}/>
                                            <Col sm={12} style={{
                                                    paddingRight: 5,
                                                    paddingLeft: 5
                                                }}>
                                                <Input style={{
                                                        marginTop: 37
                                                    }} type="file" name={'accountId'} label={'Account Id'}/>
                                            </Col>

                                            <Col sm={12}>
                                                <Button disabled={this.props.appBusy} block={true} color={'primary'} style={{
                                                        marginTop: 15,
                                                        maxWidth: 200,
                                                        marginLeft: 'auto',
                                                        marginRight: 'auto'
                                                    }} onClick={this.handleClick}>
                                                    {
                                                        this.props.appBusy
                                                            ? 'Creating...'
                                                            : 'CREATE'
                                                    }
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Col>
                        }
                    </Row>
                </CardBody>
            </Card>
        </div>)
    }
}
Create24By7Form = reduxForm({form: 'create24By7Form'})(Create24By7Form)
const mapStateToProps = state => {
    return {
        createSibelForm: _get(state, 'form.create24By7Form.values', {}),
        appBusy: _get(state, 'app.appBusy', false)
    }
};
const mapDispatchToProps = dispatch => bindActionCreators({
    createTwentyFourSeven
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Create24By7Form);
