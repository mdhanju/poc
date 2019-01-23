import React from 'react';
import {
    Row,
    Col,
    Button,
    Card,
    CardBody,
    Form
} from 'reactstrap';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import _get from 'lodash/get';
import {bindActionCreators} from 'redux';
import ReduxInput from '../../components/ReduxInput';
import {searchItems, updateSearchResult} from '../../actions/searchActions';
import SearchResults from '../SearchResults';
import queryString from 'query-string';

class Search extends React.Component {

    componentDidMount = () => {
        let params = queryString.parse(this.props.location.search)
        if (params.all) {
            this.props.searchItems()
        } else {
            this.props.updateSearchResult()
        }
    }

    handleClick = async (e) => {
        e.preventDefault();

        const search = this.props.searchForm.search;

        await this.props.searchItems(search)
    }

    createTicket = () => {
        this.props.history.push('/create')
    }

    render() {
        const searchResults = this.props.searchResults;
        return (<Card>
            <CardBody>
                <Form>
                    <h2 className={'text-center'}>SEARCH</h2>
                    <Button color={'primary'} onClick={this.createTicket}>CREATE</Button>
                    <Row>
                        <ReduxInput size={8} name={'search'} label={'Search'} hideLabel={true}/>
                        <Col sm={4}>
                            <Button disabled={this.props.appBusy} block={true} color={'primary'} style={{
                                    marginTop: 15
                                }} onClick={this.handleClick}>
                                {
                                    this.props.appBusy
                                        ? 'Searching...'
                                        : 'Search'
                                }
                            </Button>
                        </Col>
                    </Row>
                </Form>
                {searchResults && <SearchResults items={searchResults}/>}
            </CardBody>
        </Card>)
    }
}

Search = reduxForm({form: 'searchForm'})(Search)

const mapStateToProps = state => {
    return {
        searchForm: _get(state, 'form.searchForm.values', {}),
        searchResults: _get(state, 'search.searchResults'),
        appBusy: _get(state, 'app.appBusy', false)
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    searchItems,
    updateSearchResult
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search);
