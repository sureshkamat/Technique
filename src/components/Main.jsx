
import { useState } from "react";
import { Home } from "./Home";
import { Add } from "./Add";

export const Main = () => {
    const [add,setAdd]=useState(true);
  return (
    <div><button style={{marginLeft:"30px"}} onClick={()=>setAdd(!add)} className="Add">{add?"Add":"Home"}</button>
    {
      add?<Home />:<Add />
    }</div>
  )
}
