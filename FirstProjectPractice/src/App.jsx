// import { useState } from 'react'
import './App.css'
import { useState } from "react"
import Products from './product.jsx';
function App() {
  var [a,b] = useState(69);
  return (
    // update value
    // <div className="w-full h-screen bg-zing-900 p-5 ">
    //   <h1>{a}</h1>
    //   <button onClick={()=>b(a+1)} className='px-3 py-1 bg-green-500 rounded-md text-xs'>click to increase</button>
    //   <button onClick={()=>b(140)} className='px-3 py-1 bg-green-500 rounded-md text-xs'>click 140</button>
    // </div>
    <div className="w-full h-screen bg-zing-500 p-5 ">
      
      <Products naam="adfasdf" data={{age: 25, name: "harsh"}}/> 
    </div>

  )
}

export default App
