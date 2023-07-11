import styled from 'styled-components'
import { Container, Row, Col, Card } from 'react-bootstrap'
import image5 from '../images/image3.jpg'

export const FirstDiv = styled.div`
    height: 70vh;
    /* background-image: url(${image5}); */
    background-color: #272727;
    background-size: cover;
    background-position: center;
    display: block;
    position: relative;


    .service {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -55%); 

        @media only screen and (max-width:600px){
            margin-top: 5%;
        }
    }
    h1 {
    font-size: 1rem;
    color: #fff;
    /* font-family: 'Mirza', cursive; */
    }
    h2 {
        color: #fff;
        font-family: 'Mirza', cursive; 
        font-size: 3rem;
    }
`

export const ServiceDiv = styled.div`
   
   h2 {
    font-family: 'Mirza', cursive;
    font-size: 2.5em;
    /* text-decoration: underline; */
   }
  
`
export const SecondRow = styled(Row)`
    padding: 100px;
 
    h1 {
        font-family: 'Mirza', cursive;
        font-size: 2.5em;
    }
`
export const ThirdRow = styled(Row)`
    padding: 50px;
    h1{
        font-family: 'Mirza', cursive;
        font-size: 2.5em;
    }
`