import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './components/Sidebar'
import Entries from './components/Entries'
import CreateEntry from './components/CreateEntry'
import Entry from './components/Entry'
import { Route, Switch } from 'react-router-dom'
import Detail from './components/Detail'

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar col-md-3">
            <Sidebar />
          </div>
          <div className="main col-md-9">
            <Switch>
              <Route exact path="/" component={Entries} />
              <Route path="/create-new-page" component={CreateEntry} />
              <Route path="/random-page" component={Entry} />
              <Route path="/:title" component={Detail} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
