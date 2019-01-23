import React from 'react';
import {Row, Card, CardBody, Form} from 'reactstrap';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import _get from 'lodash/get';
import {bindActionCreators} from 'redux';
import ReduxSelect from '../../components/ReduxSelect';
import CreateSibelForm from './CreateSibelForm';
import Create24By7Form from './Create24By7Form';

class Create extends React.Component {

    render() {
        const programList = [
            {
                name: 'SIBEL',
                id: 'SIBEL'
            }, {
                name: '24 By 7',
                id: '24By7'
            }
        ]
        const programName = this.props.programName;

        return (<Card>
            <CardBody>
                <Form>
                    <h2 className={'text-center'}>Create service request</h2>
                    <Row >
                        <ReduxSelect
                          size={2}
                          name={'programName'}
                          items={programList}
                          placeholder={'Program'}
                          label={'Please choose the program related to this issue'}/>
                    </Row>
                </Form>
            </CardBody>
            {programName === 'SIBEL' && <CreateSibelForm />}
            {programName === '24By7' && <Create24By7Form />}
        </Card>)
    }
}

Create = reduxForm({form: 'createTicketForm'})(Create)

const mapStateToProps = state => {
    return {
        programName: _get(state, 'form.createTicketForm.values.programName'),
        appBusy: _get(state, 'app.appBusy', false)
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    // searchItems
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Create);
