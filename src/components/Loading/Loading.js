import React from 'react'
import ReactLoading from "react-loading";


function Loading() {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
    <ReactLoading  type="spin" color="rgb(139, 102, 241)" height={100} width={100} />
    </div>
  )
}

export default Loading