import React from 'react';
import {
    Card,
    CardBody,
    Row,
    Col,
    Button,
    Alert
} from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm} from 'redux-form';
import ReduxInput from '../../components/ReduxInput';
import ReduxSelect from '../../components/ReduxSelect';
import _get from 'lodash/get';
import {createSibelSeven} from '../../actions/searchActions';

class CreateSibelForm extends React.Component {

    state = {
        success: false
    }

    handleClick = async (e) => {
        e.preventDefault();
        const payload = this.props.createSibelForm
        const response = await this.props.createSibelSeven(payload);
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
                    <h2 className={'text-center'}>Sibel ticket</h2>
                    {
                        this.state.success
                            ? <Col sm={12} style={{
                                        marginTop: 25
                                    }}>
                                    <Alert color="success">
                                        Case is submitted successfully
                                    </Alert>
                                </Col>
                            : <Row>
                                    <ReduxInput size={2} name={'checkNo'} label={'Check Number'}/>
                                    <ReduxInput size={2} name={'amount'} label={'Amount'}/>
                                    <ReduxInput size={3} name={'accountId'} label={'Account Id'}/>
                                    <ReduxInput type={'date'} size={3} name={'date'} label={'Date'}/>
                                    <ReduxSelect size={2} name={'eob'} items={eobList} placeholder={'EOB'} label={'EOB'}/>
                                    <Col sm={12}>
                                        <Button disabled={this.props.appBusy} block={true} color={'primary'} style={{
                                                marginTop: 15,
                                                maxWidth: 200,
                                                marginLeft: 'auto',
                                                marginRight: 'auto'
                                            }} onClick={this.handleClick}>CREATE
                                        </Button>
                                    </Col>
                                </Row>
                    }
                </CardBody>
            </Card>
        </div>)
    }
}

CreateSibelForm = reduxForm({form: 'CreateSibelForm'})(CreateSibelForm)

const mapStateToProps = state => {
    return {
        createSibelForm: _get(state, 'form.CreateSibelForm.values', {}),
        appBusy: _get(state, 'app.appBusy', false)
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    createSibelSeven
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateSibelForm);
