import styled from 'styled-components'
import image5 from '../images/image5.jpg'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const LandDiv = styled.section`
    /* height: 100vh; */
    width: 100%;
    /* background-image: url(${image5}); */
    background-size: cover;
    background-position: center;
    /* position: relative; */

    .intro {
        margin-top: 13%;
        margin-bottom: 13%;
    }
    h1{
        font-style: bold;
        font-size: 3rem;
        font-family: 'Mirza', cursive;
        color: #106ee8;

        @media only screen and (max-width:720px){
        font-size: 2rem;
        /* padding: 10px; */
        }
    }
    p{
        /* color: #EFFFFB; */
        @media only screen and (max-width:720px){
        font-size: 1rem;
        /* padding: 10px; */
        }
    }
    .image {
        /* margin-top: 8%; */
    }

    @media only screen and (max-width:720px){
        font-size: 2rem;
        padding: 10px;
        }
`
export const OverLay = styled.div`
/* height: 100vh; */
/* filter: blur(8px);
  -webkit-filter: blur(8px); */
background: rgb(239, 255, 251, 0.6);
  
`
export const LandBtn = styled(Link)`
text-decoration: none;
display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #106ee8;
  color: white;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
  box-shadow: inset 0 2px 2px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.2);
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #21a179;
        /* border: 2px solid #50D890; */
        color: #EFFFFB;
        /* width: 100%; */
    }
`
export const HomeButton = styled(Link)`
text-decoration: none;
display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #106ee8;
  color: white;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
  box-shadow: inset 0 2px 2px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.2);
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #21a179;
        /* border: 2px solid #50D890; */
        color: #EFFFFB;
        /* width: 100%; */
    }
`

export const ServiceDiv = styled.div`
line-height: 1;
 padding: 100px;
    p{
        margin: 0;
        text-align:center;
    font-size: 2.5rem;
    font-family: 'Mirza', cursive;
    color: #106ee8;
    }
    span {
        margin: 0;
    font-size: 2rem;
    font-family: 'Mirza', cursive;
    color: #21a179;
  }
`


export const ServiceLink = styled(Link)`
    text-decoration: none;
    font-size: 1rem;
    color: #21a179;
    
    .service-icon{
        transition: transform 0.2s ease-in-out;
        }

    &:hover {
        color: #21a179;

        .service-icon{
        transform: translateX(5px);
        }
    }
`

export const AboutSection = styled.section`
    height: 100vh;
    position: relative;
`
export const AboutRow = styled(Row)`
padding: 50px;
/* position: absolute; */
/* top: 50%;
left: 50%;
transform: translate(-50%, -50%); */

@media only screen and (max-width:720px){
    padding: 10px;
        }
`
export const AboutCol = styled(Col)`
/* padding: 50px; */

h2 {
    font-family: 'Mirza', cursive; 
    padding: 10px;
}

@media only screen and (max-width:720px){
    padding: 10px;
        }
`
export const LastContainer = styled(Container)`
padding: 50px;

h2{
    font-family: 'Mirza', cursive;
}
`