import React from 'react'
import styled from 'styled-components'



export default function Navbar(props) {
  return (
    <Nav>
        <Logo>
    <div>
        {/* our logo */}
        <img src="./image/logo.jpg" alt="Logo" />

    </div>
    </Logo>
    <NavBar>
        {/* All List */}
        <div>
<ul>
    <li><a href="#">{props.title}</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Price List</a></li>
    <li><a href="#">Contact</a></li>
    
</ul>
</div>
    </NavBar>
    <Search>
<div>
    {/* Search Box */}
    <label htmlFor="Search">Search </label> 
    <input type="text" placeholder='Search Here' />

</div>
</Search>
    </Nav>
  )
}





const Nav = styled.div`
display: flex;
justify-content: space-around;
background-color: pink;



`;
const Logo = styled.div`
img{
height: 70px;
width: 70px;
border-radius: 35px;}
`;

const NavBar = styled.div`
ul{
    margin-top: 15px;
    display: flex;
    gap: 28px;
}
ul li{
    display: flex;
    list-style-type: none;
    font-size: 28px;
    
}
ul li a{
    text-decoration: none;
}
ul li a:hover{
    font-size:30px ;
    color: #1d1a1a;
    text-shadow: 2px 2px 2px red;
}
`;


const Search = styled.div`
margin-top: 15px;
display: flex;
justify-content: space-around;
input{
    color: #ac0e28;
    font-size:20px;
    background-color: rgba(0,0,0,0.2);
}
input:focus{
    
    background-color: transparent;
}

label{
color: red;
font-size:28px;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
label:hover{
    font-size:30px ;
    color: #1d1a1a;
    text-shadow: 2px 2px 2px red;
}

`;
