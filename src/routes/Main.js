import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import SubRuta from './SubRuta'
import Schedule from './Schedule'
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component = {Home}/>
            <Route path='/jugadores' component = {SubRuta}/>
            <Route path='/schedule' component = {Schedule}/>
        </Switch>
    </main>
)
export default Main 
