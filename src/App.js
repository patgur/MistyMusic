import React from "react"
import MainPage from "./components/pages/MainPage"
import Tablatures from "./components/pages/Tablatures"
import Chords from "./components/pages/Chords"
import Navbar from "./components/pages/Navbar"
import L_00 from "./components/pages/tutorials/lesson_00"
import L_01 from "./components/pages/tutorials/lesson_01"
import L_02 from "./components/pages/tutorials/lesson_02"
import L_03 from "./components/pages/tutorials/lesson_03"
import L_04 from "./components/pages/tutorials/lesson_04"
import L_05 from "./components/pages/tutorials/lesson_05"
import L_06 from "./components/pages/tutorials/lesson_06"
import L_07 from "./components/pages/tutorials/lesson_07"
import L_08 from "./components/pages/tutorials/lesson_08"
import L_09 from "./components/pages/tutorials/lesson_09"
import L_10 from "./components/pages/tutorials/lesson_10"
import L_11 from "./components/pages/tutorials/lesson_11"
import L_12 from "./components/pages/tutorials/lesson_12"
import L_13 from "./components/pages/tutorials/lesson_13"
import L_14 from "./components/pages/tutorials/lesson_14"
import L_15 from "./components/pages/tutorials/lesson_15"
import L_16 from "./components/pages/tutorials/lesson_16"
import L_17 from "./components/pages/tutorials/lesson_17"
import L_18 from "./components/pages/tutorials/lesson_18"
import L_19 from "./components/pages/tutorials/lesson_19"
import L_20 from "./components/pages/tutorials/lesson_20"
import L_21 from "./components/pages/tutorials/lesson_21"
import L_22 from "./components/pages/tutorials/lesson_22"

import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './components/pages/style/App.css'

class App extends React.Component{
  render(){
    return (
      <div className="body">
        <Router>
          <Navbar />

          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/home' component={MainPage} />
            <Route exact path='/tablatures' component={Tablatures} />
            <Route exact path='/chords' component={Chords} />
            <Route exact path="/tutorial" component={L_00} />
            <Route exact path="/tutorial/00" component={L_00} />
            <Route exact path="/tutorial/01" component={L_01} />
            <Route exact path="/tutorial/02" component={L_02} />
            <Route exact path="/tutorial/03" component={L_03} />
            <Route exact path="/tutorial/04" component={L_04} />
            <Route exact path="/tutorial/05" component={L_05} />
            <Route exact path="/tutorial/06" component={L_06} />
            <Route exact path="/tutorial/07" component={L_07} />
            <Route exact path="/tutorial/08" component={L_08} />
            <Route exact path="/tutorial/09" component={L_09} />
            <Route exact path="/tutorial/10" component={L_10} />
            <Route exact path="/tutorial/11" component={L_11} />
            <Route exact path="/tutorial/12" component={L_12} />
            <Route exact path="/tutorial/13" component={L_13} />
            <Route exact path="/tutorial/14" component={L_14} />
            <Route exact path="/tutorial/15" component={L_15} />
            <Route exact path="/tutorial/16" component={L_16} />
            <Route exact path="/tutorial/17" component={L_17} />
            <Route exact path="/tutorial/18" component={L_18} />
            <Route exact path="/tutorial/19" component={L_19} />
            <Route exact path="/tutorial/20" component={L_20} />
            <Route exact path="/tutorial/21" component={L_21} />
            <Route exact path="/tutorial/22" component={L_22} />
            <Redirect to='/' />
          </Switch>

        </Router>
      </div>
    )
  }
}

export default App