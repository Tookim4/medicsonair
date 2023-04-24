import styled from 'styled-components'
import image5 from '../images/img7.jpg'

export const FirstDiv = styled.div`
    height: 55vh;
    /* background: rgba(194, 200, 206, 0.103); */
    background-image: url(${image5});
    background-size: cover;
    display: block;
    position: relative;

        /* .about {
            position: absolute;
            top: 40%;
            left: 25%;
            transform: translate(-40%, -45%); 
        } */
            h1 {
            font-size: 4rem;
            color: #fff;
            }
`
export const OverLay = styled.div`
height: 55vh;
background: rgba(24, 24, 35, 0.904);
  
`