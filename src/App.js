import "./App.css";
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import ChatRoom from './components/ChatRoom';
import Login from './components/Login';
import AuthProvider from './Context/AuthProvider';
import AppProvider from "./Context/AppProvider";
import AddRoomModals from "./components/Modals/AddRoomModals";
import InviteMemberModal from "./components/Modals/InviteMemberModals";

function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
          <AppProvider>
            <Routes>
              <Route element={<Login/>} path='/login' />
              <Route element={<ChatRoom/>} path='/' />   
            </Routes>
            <AddRoomModals/>
            <InviteMemberModal/>
          </AppProvider>
        </AuthProvider> 
    </BrowserRouter>
  );
}

export default App;
