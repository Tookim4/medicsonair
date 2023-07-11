import styled from 'styled-components'
import image5 from '../images/background.png'

export const FirstDiv = styled.div`
    height: 70vh;
    /* background: rgba(194, 200, 206, 0.103); */
    background-image: url(${image5});
    background-position:center;
    background-size: cover;
    display: block;
    position: relative;
    color: #fff;

        /* .about {
            position: absolute;
            top: 40%;
            left: 25%;
            transform: translate(-40%, -45%); 
        } */
            h1 {
            font-size: 4rem;
            color: #fff;
            font-family: 'Mirza', cursive;
            font-size: 4em;
            }
`
export const OverLay = styled.div`
height: 70vh;
background: rgba(24, 24, 35, 0.281);
  
`