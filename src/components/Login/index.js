import React from "react";
import {Row, Col, Typography, Button} from 'antd';
import firebase,  {auth} from "../../firebase/config";
import { addDocument, generateKeywords } from "../../firebase/services";
const {Title} = Typography;


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
    
    
    
    return ( 
        <div>
            <Row justify="center" style={{height:'800'}}>
                <Col span={8}>
                    <Title style={{textAlign: 'center'}} lever={3}>Chọn phương thức đăng nhập</Title>
                    <Button style={{width: '100%', marginBottom: 5}} onClick={() => handleFbLogin(ggProvider)} >Đăng nhập bằng google</Button>
                    <Button style={{width: '100%'}} onClick={()=>handleFbLogin(fbProvider)} >Đăng nhập bằng facebook</Button>
                </Col>
            </Row>
        </div>
     );
}

export default Login;