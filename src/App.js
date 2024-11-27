
import './App.css';
import {Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import PostDetails from './pages/PostDetails';
import EditPost from './pages/EditPost';
import MyBlogs from './pages/MyBlogs';
import Profile from './pages/Profile';
import Register from'./pages/Register';
import UserContextProvider  from './contexts/UserContext'



function App() {
  return (
 <UserContextProvider>
  
<Routes>
  <Route exact path='/' element = { <Home/> }/>
   <Route exact path='/login' element = {<Login/>} />
   <Route exact path='/register' element = {<Register/>} />
   <Route exact path='/ write' element = { <CreatePost/> }/>
   <Route exact path='/Post/post:id' element = { <PostDetails/> }/>
   <Route exact path='/edit/:id' element = { <EditPost/> }/>
   <Route exact path='/myblogs/:id' element = { <MyBlogs/> }/>
   <Route exact path='/myprofile/:id' element = { <Profile/> }/>
</Routes>
 </UserContextProvider>
 
  );
}

export default App;
