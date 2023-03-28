import styled from 'styled-components'
import img from './images/bg-main-desktop.png'
import front from './images/bg-card-front.png'
import back from './images/bg-card-back.png'

export const Container = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh ;
    max-width: 1420px;
    justify-content: center;
    align-items: center ;
`;

export const Content = styled.div`
    display: grid ;
    grid-template-columns: 1fr 1fr;
    background-image: url(${img});
    width:100vw;
    height: 100vh ;
    background-size: 30rem 100%;
    background-repeat: no-repeat ;
`;

export const Card = styled.div`
    /* width: 100vh; */
    /* height: 100vh; */
    display: flex ;
    flex-direction: column;
    justify-content: center ;
    align-items: center ;
    margin: 6% 15%;
    gap: 7%;

    .card {
        border-radius:10px;
    } 

`;

export const Front = styled.div`
    background-image: url(${front});
    position: relative ;
    background-size: contain;
    width: 100%;
    height: 100% ;
    position: relative ;
    background-repeat: no-repeat;

    img {
        margin: 20px 30px;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column; 
    width: 80%;
    margin: 8% 10%;
    height: 100%;
    margin-top: 50px ;
`;

export const Back = styled.div`
    background-image: url(${back});
    background-size: contain;
    width: 100%;
    height: 100% ;
    background-repeat: no-repeat;
    margin-left: 100px;
    display: flex;
    justify-content:end ;
    align-items:center ;
    position: relative;

    span {
        position: fixed;
        margin-right: 80px;
        font-family: 'Space Grotesk', sans-serif;

        color: hsl(0, 0%, 100%);
        /* margin: 120px 380px; */
        letter-spacing: 0.7px ;
        
    }
`;

export const Number = styled.span`
    font-size: 1.7rem;
    color: hsl(0, 0%, 100%);
    font-family: 'Space Grotesk', sans-serif;
    letter-spacing: 5px ;
    font-weight: bolder;
`;

export const Datas = styled.div`
    margin-top: 26px;
    display: flex ;
    justify-content: space-between ;

    span {
        color: hsl(0, 0%, 100%);
        font-family: 'Space Grotesk', sans-serif;
        font-size: 0.8rem;
        font-weight: 600 ;
        letter-spacing: 1.9px ;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column ;
    align-items: flex-start ;
    justify-content: center;

    p {
        margin-top: -20px ;
        color: red;
        display: flex ;
        /* justify-content: center ; */
        font-size: 1rem;
        letter-spacing: 0.2px ;
        font-family: 'Space Grotesk', sans-serif;
    }    

    input {
        width: 290px ;
        height: 40px;
        border-radius: 7px;
        margin-bottom: 25px; ;
        border: solid 1px hsl(270, 3%, 87%);
        outline:none;
        padding-left:15px ;
        font-size: 1rem ;
        letter-spacing: 1px ;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 800 ;
        /* text-transform: uppercase ; */

        ::placeholder {
            color: hsl(279, 6%, 55%);
            /* padding-left: 10px ; */
            font-family: 'Space Grotesk', sans-serif;
            font-weight: normal;
            /* text-transform: lowercase ; */
        }
    }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    label {
        margin-bottom: 5px;
        font-size: 1.125rem;
        color: hsl(278, 68%, 11%);
        font-family: 'Space Grotesk', sans-serif;
        font-weight: bolder;
        font-size: 0.8rem ;
        letter-spacing: 1px ;
    }
    
    input:focus {
        border: solid 1px hsl(249, 99%, 64%);
    }

    input:invalid {
        border: solid 1px red;
    }

    
`;

export const DatasCard = styled.div`
    display: flex ;
    flex-direction: column;

    div {
        display: flex;

        label {
            margin-right: 45px;
        }
    }

    .erros {
        display: flex ;
        width:21vw;
        justify-content: space-between ;
    }
`;

export const ExpDate = styled.div`
    display: flex;

    .mesAno {
        width: 70px ;
        margin-right: 10px;
    }

    .cvc {
        width: 120px;
        margin-left: 10px ;
    }

    div {
        width: 12vw;
        display: flex;

        input {
            display: inline-block ;
            margin-bottom: 0px ;
        }

        p {
            width: 7vw ;
        }
    }

    p{
        display: flex ;
        flex-direction: column-reverse; 
        font-size: 0.9rem ;
        margin: 10px ;
    }

    
`;

export const ButtonConfirm = styled.button`
     width: 290px;
     height: 40px;
     border-radius: 8px ;
     background-color: hsl(278, 68%, 11%);
     color: hsl(0, 0%, 100%);
     font-family: 'Space Grotesk', sans-serif;
     font-size: 1rem;
     cursor: pointer;
`;