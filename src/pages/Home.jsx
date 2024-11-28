import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import HomePosts from '../components/HomePost'
import Footer from '../components/Footer'
// import {URL} from '../url'
import  {useEffect, useContext, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import Loader from '../components/Loader'
import { UserContext } from '../contexts/UserContext'

function home() {
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default home