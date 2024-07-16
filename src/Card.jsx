import React from 'react'

export default function Card({item, deleteMe, updatData}) {
  return (
    <div>
        <p> {item.text}</p>
       <button className='bg-lime-800 p-2 rounded-sm text-white' onClick={()=> deleteMe(item.id)} >Delete Me</button>
       <button className='bg-lime-800 p-2 rounded-sm text-white ms-2' onClick={()=> updatData(item.id)} >update Me</button>

        
        </div>
  )
}
