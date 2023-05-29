import React,{useState} from 'react'
import "./homepage.css"
import Notecard from './notecard'
import Menu from "./menuApi";
import axios from "axios"




const Homepage = () => {

  const [menuData, setMenuData]=useState(Menu);


  
  const [ note, setNote] = useState({    
    email:"",
    title:"",
    notes: "",
    time:"",
    date:""
})


const handleChange = e => {
  const { name, value } = e.target
  setNote({
      ...note,
      [name]: value
  })
}



const homepage = () => {
  const {email, title, notes,time,date } = note
  if( email && title && notes){
      axios.post("http://localhost:9002/homepage", note)
      
  } else {
      alert("invlid input")
  }
  
}



  return (
    <div >
      <Notecard menuData={menuData}/>
      <div >
        <input type="text" name="title" value={note.title} placeholder='Title' onChange={handleChange}></input> 
        <input type="text" name="notes" value={note.notes} placeholder='Make a note' onChange={handleChange}></input> 
        <div className="button" onClick={homepage} >Make note</div>
      </div>
    </div>
  )
}

export default Homepage