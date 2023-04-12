import React,{useContext} from 'react'
import MyNavbar from './MyNavbar'
import { contextData } from './Context'

const About = () => {
    const {name} = useContext(contextData);
  return (
    <div>
        <MyNavbar/>
       <h3> This is  about {name} </h3>
    </div>
  )
}

export default About
