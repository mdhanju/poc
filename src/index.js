import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
// import serviceWorker from './registerServiceWorker'
import App from './App'
import store, { history } from './store'
import './styles/app.scss'

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
)

// serviceWorker.unregister()
