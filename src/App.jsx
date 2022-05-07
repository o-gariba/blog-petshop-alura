import React from 'react'
import './assets/css/base/base.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pag404 from './paginas/Pag404'
import Cabecalho from './assets/components/Cabecalho'

// Para rodar o json-server usamos o comando $ json-server --watch db.json --port 5000

function App() {
  
  return (
    <>
      <Router>
        <Cabecalho /> 
        <Switch>
          <Route path={'/'} exact>
            <Home />
          </Route>

          <Route path={'/sobre'}>
            <Sobre />   
          </Route>

          <Route>
            <Pag404 />
          </Route>
        </Switch>
      </Router> 
    </>
  )
}

export default App
