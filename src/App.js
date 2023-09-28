import React, { useMemo, useRef, useState } from 'react';
 
export default function App()  {
  const [v, setv] = useState([])
  const [query, setQuery] = useState("")
  const inputRef = useRef()

  const filteredItems = useMemo(()=>{

  return  v.filter((v)=>{return v.toLowerCase().includes(query.toLowerCase())})}
  ,[v, query])

  const submit = (e)=>{
    e.preventDefault()
    const value = inputRef.current.value;
    if(value==="") return
    setv(prev=>{return [...prev, value]});
    // setFilterItems(prev=>{return[...prev, value]})
    inputRef.current.value=""
  }

  // const onchange = (e)=>{
  //   const value = e.target.value;
  //   setFilterItems(v.filter(item=>
  //       item.toLowerCase().includes(value.toLowerCase()))
  //     )
  // }

  return (
    <React.Fragment>

<div style={{"marginLeft":"40rem " , "marginTop":"15em"}}>
      <label htmlFor="Search" >Search:</label>
      <input type="search" value={query} onChange={(e)=>setQuery(e.target.value)}  name="Search"  id="Search"  />
      <button >Submit</button>
<br/>
<br/>

<div >
  <form onSubmit={submit}>

      <label htmlFor="text" >Name</label>
      <input type="text" ref={inputRef} name="text"  id="text"  />
      <button  type='submit'>Add</button>
  </form>
</div>
<h3>
  Items:
  </h3>
  
  <div>
    <ol >
              {filteredItems.map((v,i)=>(
                
                <li key={i}>{v}</li>
                ))}
              </ol>
                </div>

            
      </div>
      
    </React.Fragment>
  );
}


