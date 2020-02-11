import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ApiProvider } from './components/_context'
import Nav from './components/Nav'
import PageOne from './views/PageOne'
import PageTwo from './views/PageTwo'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />

      <ApiProvider>
        <Switch>
          <Route exact path="/">
            <PageOne />
          </Route>

          <Route exact path="/pageone">
            <PageOne />
          </Route>

          <Route exact path="/pagetwo">
            <PageTwo />
          </Route>
        </Switch>
      </ApiProvider>
    </BrowserRouter>
  )
}
