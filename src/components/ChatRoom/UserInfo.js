import React from 'react'
import { Button, Avatar, Typography } from 'antd'
import styled from 'styled-components'
import {auth} from '../../firebase/config'
import { AuthContext } from '../../Context/AuthProvider'
const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(82,38,83);
    
    .username{
        color: white;
        margin-left: 5px;
    }

    @media screen and (max-width: 1000px){
      flex-direction: column;
      align-items: center;
      .user-container{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .ant-avatar, .ant-btn{
        margin-top: 10px
      }
      .ant-typography{
        font-size: 0.8rem;
        margin: 10px 0 0 0;
      }
      Button{
        font-size: 0.6rem;
        padding: 0;
        border-radius: 12px;
        width: 100px;
      }
    }
`
export default function UserInfo() {
  
  const {user: {
    displayName,
    photoURL,
  } } = React.useContext(AuthContext)

  return (
    <WrapperStyled>
        <div className='user-container' >
            <Avatar src={photoURL}>{photoURL?"":displayName?.charAt(0)?.toUpperCase()}</Avatar>
            <Typography.Text className='username'>{displayName}</Typography.Text>
        </div>
        <Button ghost onClick={()=> auth.signOut()}>Đăng Xuất</Button>
    </WrapperStyled>
  )
}
