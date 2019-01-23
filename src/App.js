import React from 'react'
import Sidebar from 'react-sidebar';
import routes from './routes'
import SidePanelContent from './containers/SidePanelContent';

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: false
        };

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        mql.removeListener(this.mediaQueryChanged);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    mediaQueryChanged() {
        this.setState({sidebarDocked: mql.matches, sidebarOpen: false});
    }

    render() {
        return (<Sidebar
                  sidebar={<SidePanelContent />}
                  open={this.state.sidebarOpen}
                  docked={this.state.sidebarDocked}
                  onSetOpen={this.onSetSidebarOpen}
                  styles={{ sidebar: { minWidth: 100, padding: 10 } }}>
            {routes}
        </Sidebar>);
    }
}

export default App;
