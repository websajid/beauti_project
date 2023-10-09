import React, { useRef,useState } from 'react'

export default function Imageuploder() {
    const inputref = useRef(null);
    const [image,Setimage]= useState();

   const handleClick =()=>{
    inputref.current.click();

    }
    const ImageChange=(event)=>{
       const file = event.target.files[0];
       Setimage(event.target.files[0])
    }





  return (
    <div onClick={handleClick}>

{image ? <img src={URL.createObjectURL(image)} alt="" />:<img src="/image/logo.jpg" alt="" /> }
<input type="file" ref={inputref} onChange={ImageChange} />
    </div>
  )
}

