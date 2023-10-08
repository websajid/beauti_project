import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Alertmsg(props) {
  const [show, setShow] = useState(true);
  const capital = (word)=>{
            const lower = word.toLowerCase();
            return  lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  if (show) {
    return (
      props.alert && <Alert dismissible>
        
        <p>
          {capital(props.alert.type)} :  {props.alert.msg}
          
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default Alertmsg;