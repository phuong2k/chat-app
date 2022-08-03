import React from "react";
import {Row, Col, Button} from 'antd';
import firebase,  {auth} from "../../firebase/config";
import { addDocument, generateKeywords } from "../../firebase/services";
import styled from "styled-components";


const fbProvider = new firebase.auth.FacebookAuthProvider();
const ggProvider = new firebase.auth.GoogleAuthProvider()
function Login() {
    const handleFbLogin = async(provider) =>{
        const {additionalUserInfo, user}= await auth.signInWithPopup(provider)

        if(additionalUserInfo?.isNewUser){
           addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user.displayName?.toLowerCase()),
           })
        }
    };
    

    const ColStyled = styled(Col)`
        Button{
            height: 60px;
            font-size: 2rem;
        }
        
        @media screen and (max-width: 1200px){
            Button{
                width: 300px!important;
                font-size: 1.4rem!important;
            }  
        } @media screen and (max-width: 800px){
            Button{
                width: 300px!important;
                font-size: 1.4rem!important;
            }  
        }
        @media screen and (max-width: 500px){
            Button{
                width: 300px!important;
                font-size: 1.4rem!important;
            }      
        }
    `
    const TitleStyled = styled.div`
    text-transform: uppercase;
    background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    t}ext-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
    font-size: 70px;
    width: 1200px;
    padding: 10px 0;
    
    @media screen and (max-width: 1200px){
        font-size: 50px;
    } @media screen and (max-width: 800px){
        font-size: 30px;
    }
    @media screen and (max-width: 500px){
        font-size: 20px
    }

    @keyframes textclip {
        to {
            background-position: 200% center;
        }
    }
    }
    `
    
    return ( 
        <div>
            <Row justify="center" style={{height:'800'}}>
                <ColStyled span={8} style={{display:"flex", flexDirection:"column",alignItems:"center", textAlign:"center"}}>
                    <TitleStyled style={{textAlign: 'center'}} lever={3}>Chọn phương thức đăng nhập</TitleStyled>
                    <Button style={{width: '100%', marginBottom: 5}} onClick={() => handleFbLogin(ggProvider)} >Đăng nhập bằng google</Button>
                    <Button style={{width: '100%'}} onClick={()=>handleFbLogin(fbProvider)} >Đăng nhập bằng facebook</Button>
                </ColStyled>
            </Row>
        </div>
     );
}

export default Login;