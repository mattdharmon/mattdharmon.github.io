import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

// Components
import App from './components/App'
import Home from './components/Home'
import Skills from './components/Skills'

// css
import css from './styles/main.scss'
import mdljs from 'material-design-lite'

// build out the route
const router = (
  <Provider store={store} >
    <Router history={history}>
      <Router path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/skills" component={Skills}></Route>
      </Router>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
