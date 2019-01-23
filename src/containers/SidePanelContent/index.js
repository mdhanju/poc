import React from 'react';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup} from 'reactstrap';

class SidePanelContent extends React.Component {

    render() {
        return (<ButtonGroup vertical={true}>
            <Button color="link">
                <Link to="/">LogIn</Link>
            </Button>
            <Button color="link">
                <Link to="/search">Search</Link>
            </Button>
            <Button color="link">
                <Link to="/create">Create</Link>
            </Button>
            <Button color="link">
                <Link to="/view?all=true">View</Link>
            </Button>
        </ButtonGroup>)
    }
}

export default SidePanelContent;
