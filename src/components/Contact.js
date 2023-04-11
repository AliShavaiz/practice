import React, {useContext} from 'react'
import MyNavbar from './MyNavbar'
import { contextData } from './Context';


const Contact = () => {
    const {setName} = useContext(contextData);
    const handleContext = () => {
        setName('Ali Shavaiz')
        alert('data changed')
    }
  return (
    <div>
        <MyNavbar/>
       <h3> contact </h3>
       <button className='btn btn-primary' onClick={handleContext}> change context data </button>
    </div>
  )
}

export default Contact
