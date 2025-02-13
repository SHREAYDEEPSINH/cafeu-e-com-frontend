import React from 'react'
import Home from './Home'
import Qualitycards from './Qualitycards'
import SpecialOffers from './SpecialOffers'
import Aboutus from './Aboutus'
import Menu from './Menu'
import Order from './Order'

function Container() {
  return (
    <div>
        <Home/>
        <Qualitycards/>
        <SpecialOffers/>
        <Aboutus/>
        <Menu/>
        <Order/>
    </div>
  )
}

export default Container