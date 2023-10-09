import Form from 'react-bootstrap/Form';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Button from 'react-bootstrap/Button';
  import { useState } from 'react';

function TextControlsExample(props) {
const [text, settext]= useState("")
const handleclick=()=>{
  // settext("Zuber ki girlfreind meri lover h")
  var uprcase = text.toUpperCase();
  settext(uprcase);
  props.showAlert("convert to Uppercase","success")
  console.log(props.mode)
}


const handlechech =(e)=>{
settext(e.target.value)
}

var word=text.split(" ").length-1;
let charat= text.split("").length-word;

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  // msg.lang = "en-GB"
  msg.text = text;
  window.speechSynthesis.speak(msg);
  console.log(msg);
  props.showAlert("Speak clicked","success")

}
function voice(){
const recognition = new webkitSpeechRecognition();
recognition.lang = "en-GB"
 recognition.onresult = function(event){
  console.log(event)
   settext(event.results[0][0].transcript);
}
recognition.start();
props.showAlert("Reconding start","success")
}
const Clearall =()=>{
  settext("")
}
  return (
    <>
    <br />
    
    <label className='primary' htmlFor="heacding" style={{color: props.mode==='dark'?'#042743':'blue'}}>
      {props.heacding} </label>
     <br />
    <Form.Control  as="textarea" size="lg" type="text"  value={text} onChange={handlechech}
    style={{height: '100px',backgroundColor: props.mode==='dark'?'grey':'white', 
            color:props.mode==='dark'?'white':'black' }}
    />
    <br />
    <Button variant="primary" onClick={handleclick}>Convert to Uppercase</Button>{' '}
    <Button type="text" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</Button>
    <Button type="text" onClick={voice} className="btn btn-warning mx-2 my-2">Record voice</Button>
    <Button type="text" onClick={Clearall}  className="btn btn-danger mx-2 my-2">Clear-All</Button>
<br />


    <h3 style={{color:props.mode==='light'?'black':'white'}}>Your text Summary</h3>
    <p  style={{color:props.mode==='dark'?'grey':'black'}}>{word} word And {charat} Charector</p>
    <p  style={{color:props.mode==='dark'?'grey':'black'}}>{0.0040*charat}s mint read</p>
    <h3 style={{color:props.mode==='dark'?'white':'black'}}>Preview</h3>
    <p  style={{color:props.mode==='dark'?'white':'black'}}>{text.length>0 ? text : "Enter some text for Preveiw"}</p>
    
   
    </>
  );
}

export default TextControlsExample;
