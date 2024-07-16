import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Card from './Card'

function App() {
 const [yes, setYes]= useState(true)
 const [show, setShow]= useState(false)
 const [comment, setComment]= useState([])
 const [id, setId]= useState("")
 const [text, setText]= useState("")
 const deleteMe=(id)=>{
  console.log(id);
setYes(!yes)
  axios.delete(`http://localhost:4000/comments/${id}`).then(res=> console.log(res))

}
  useEffect(()=>{
axios.get("http://localhost:4000/comments").then(dt=> setComment(dt.data))
  }, [yes])
  const dataPost=()=>{
    // post 
    axios.post('http://localhost:4000/posts', 
      { "id": "3", "title": "a title", "views": 300 
  }).then(resp => {
      console.log(resp.data);
  }).catch(error => {
      console.log(error);
  });



  }
const sentData=(event)=>{
  event.preventDefault();
  setYes(!yes)
  const data={
    id, text
  }

  axios.post("http://localhost:4000/comments", data).then(res=> console.log(res))



}
const updatData=(id)=>{
  setShow(true)
  setId(id)
console.log(id);

}

console.log(comment);
const UpdateData=(event)=>{
  event.preventDefault();

  const data={
    id, text
  }
axios.put(`http://localhost:4000/comments/${id}`,data ).then(res=> {
  if (res.status == 200) {
    setYes(!yes)
    setShow(false)
  }
})
}
  return (
    <>
      <button onClick={dataPost}>Click Me</button>

      {
        comment.map(item=> <Card key={item.id} deleteMe={deleteMe} updatData={updatData} item={item} />)
      }
             <button className='bg-red-500 p-2 rounded-sm text-white'  >Add Data</button>

             <form onSubmit={sentData}>
              <input onChange={(e)=> setId(e.target.value)} className='border border-red-600 p-2 ' type="text" placeholder='hello' />
              <input onChange={(e)=> setText(e.target.value)} className='border border-red-600 p-2 ' type="text"  />
              <input className='border border-red-600 p-2 bg-red-600 ' type="submit" value="POST DATA" />

             </form>
             {
              show && <form  onSubmit={UpdateData}>
            
              <input onChange={(e)=> setText(e.target.value)} className='border border-red-600 p-2 ' type="text"  />
              <input className='border border-red-600 p-2 bg-red-600 ' type="submit" value="POST DATA" />

             </form>
             }
         
    </>
  )
}

export default App
