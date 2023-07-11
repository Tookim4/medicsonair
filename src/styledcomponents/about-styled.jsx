import styled from 'styled-components'
import { Container, Row, Col, Tab } from 'react-bootstrap';
import image5 from '../images/image1.jpg'

export const FirstDiv = styled.div`
    height: 70vh;
    background-color: #FAF9F9;
    /* background-image: url(${image5}); */
    background-size: cover;
    display: block;
    position: relative;

        .about {
            position: absolute;
            top: 40%;
            left: 25%;
            transform: translate(-40%, -45%); 
        }
            h1 {
            font-size: 4rem;
            color: #fff;
            }
`
export const AboutDiv = styled.div`
text-align: center;

h2{
    color: #106EE8;
    margin-top: 4%;
    font-size: 3rem;
    font-family: 'Mirza', cursive;

    @media only screen and (max-width:768px){
    margin-top: 15%;
    font-size: 1.5rem;
    }

    @media only screen and (max-width:1280px){
    margin-top: 8%;
    font-size: 2rem;
    }
}
p{
    color: #21A179;
    font-size: 1rem;
    margin: 0;
    padding: 0 50px;
    /* width: 300px; */
    @media only screen and (max-width:768px){
    font-size: 0.8rem;
    }
}

`
export const ValuesDiv = styled.div`
/* text-align: center; */
color: #EFFFFB;
height: 25vh;
margin-top: 60px;

ul{
    li{
        display: inline;
        padding: 0 20px;

    @media only screen and (max-width:768px){
    text-align: start;
    padding: 0 8px;
    font-size: 0.8rem;
    word-wrap: break-word;
    }
    }
}
`
export const SecondRow = styled(Row)`
background-color: #272727;
padding: 30px;
h2{
    /* font-family: 'Instrument Serif', serif; */
    font-family: 'Mirza', cursive;
}
`

export const ThirdRow = styled.div`

h4{
    font-family: 'Mirza', cursive;
    font-size: 2em;
}
`
export const ThirdRowDiv = styled.div`
text-align: center;
h4{
    margin-top: 50px;
    padding: 20px;
}
ul{
    align-items: center;
    li{
        padding: 30px;
    }
}
hr {
    width: 800px;
    margin: auto;
}
`
export const SecondSection = styled.div`

`
export const SecondSectionDiv = styled.div`

`
export const SecondSectionRow = styled(Row)`
margin: 150px 0;
`
export const SecondSectionCol = styled(Col)`

h4{
    font-family: 'Mirza', cursive;
    font-size: 2em;
}
img {
    margin-top: 80px;
}
`