import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

function Darkmodenavbar(props) {
  return (
    
    <Nav defaultActiveKey="/home" as="ul" id='nav'  className= {`  bg-${props.mode}`}>
      
      <Nav.Item as="li">
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      
      <Form className='my-2 mx-5' >
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Mode"
       onClick={props.toggleMode}
       style={{display:'flex', justifyContent: 'center'}}
      />
      </Form>
    
    </Nav>
  );
}

export default Darkmodenavbar;