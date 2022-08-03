import React from 'react'
import {Collapse, Typography, Button } from 'antd';
import styled from 'styled-components';
import { PlusCircleOutlined } from '@ant-design/icons';
import { AppContext } from '../../Context/AppProvider';


const {Panel} = Collapse;
const PanelStyled = styled(Panel)`
  @media screen and (max-width: 650px){
    font-size: 0.7rem;
    .ant-collapse-header{
      padding: 10px 5px!important;
    }
    .ant-collapse-header, p{
      color:white!important;
    }
    .ant-collapse-content-box {
      padding: 0 10px;
    }
    
    .add-room{
      color: white;
      padding: 0;
      display:block;
    }
    .ant-btn{
      width: 90px;
      font-size: 0.7rem;
      left: -5px;
    }
  }
  @media screen and (min-width: 651px){
    &&&{
      .ant-collapse-header, p{
        color:white;
      }
      .ant-collapse-content-box {
        padding: 0 40px;
      }
      .add-room{
        color: white;
        padding: 0;
  
      }
    }
  }
`
const LinkStyled = styled(Typography.Text)`
  display: block;
  margin-bottom: 5px;
  color: white;
  border-bottom: 1px solid rgba(82,38,83);
`

export default function RoomList() {
 
  const {rooms, setIsAddRoomVisible, setSelectedRoomId} = React.useContext(AppContext)
  const handleAddRoom = () =>{
    setIsAddRoomVisible(true)
  }
  return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PanelStyled header="Room List" key='1'>
              {rooms.map((room) => (
                <LinkStyled key={room.id} onClick={()=>setSelectedRoomId(room.id)}>
                {room.name}
                </LinkStyled>
              ))}
                <Button className='add-room' type='text' icon={<PlusCircleOutlined/>} onClick={handleAddRoom}>Thêm Phòng</Button>
            </PanelStyled>
        </Collapse>
  )
}
