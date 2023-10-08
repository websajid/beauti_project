import DarkModeON from './components/DarkModeON'
import Container from 'react-bootstrap/Container';
import TextControlsExample from './components/TextControlsExample';
import Darkmodenavbar from './components/Darkmodnavbar';
import Alertmsg from './Alertmsg';
import { useState } from 'react';



function App() {
  const [mode , setmode]= useState('light');
  const [alert , setalert]= useState(null);
  const showAlert =(message , type)=>{
   setalert({
    msg : message,
    type : type
  })
  setTimeout(() => {
    setalert(null)
  }, 1500);
  }
  


  const toggleMode = ()=>{
  if(mode === 'light'){
    setmode('dark')
    document.body.style.backgroundColor='#042743';
    showAlert("Enable Dark mode","success");
    console.log(mode+" " +'dark')
  }
   else{
    setmode('light')
    document.body.style.backgroundColor='white';
    showAlert("Enable light mode","primary");
    console.log(mode +'light')
  }}

  return (
    <>
    <Container fluid="md">
     <Darkmodenavbar mode = {mode}  toggleMode={toggleMode}/>
     <Alertmsg alert={alert} />
     <TextControlsExample showAlert={showAlert} mode = {mode} heacding="Enter you name bellow" />
     {/* <DarkModeON /> */}
     </Container>
    </>
  )
}

export default App
