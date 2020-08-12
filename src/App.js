import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './components/Sidebar'
import Entries from './components/Entries'
import CreateEntryForm from './components/CreateEntryForm'
import EditEntryForm from './components/EditEntryForm'
import SearchResults from './components/SearchResults'
import { Route, Switch } from 'react-router-dom'
import Detail from './components/Detail'
import NotFound from './components/NotFound'

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
              <Route path="/edit/:title" component={EditEntryForm} />
              <Route path="/search/:title" component={SearchResults} />
              <Route path="/detail/:title" component={Detail} />
              <Route path="/create" component={CreateEntryForm} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
