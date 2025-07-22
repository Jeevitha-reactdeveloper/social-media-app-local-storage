import About from './About';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Nav from './Nav';
import {Routes, Route } from 'react-router-dom';
import Editpost from './Editpost';
import { DataProvider } from './contextapi/DataContext';


function App() {
  
return (
    <div className="App">
      <DataProvider>
        <Header title="Social Media App" />
        <Nav/>
        <Routes>
          <Route path='/'  element ={ <Home/>}
            />

          <Route path='post'> 
              <Route index element={<NewPost />}/>

              <Route path=':id'  element={<PostPage/>}/>
            </Route>
            <Route path='/edit/:id' element={<Editpost />}/>
            <Route path='about'  element={<About/>}/>
            <Route path='*' element={<Missing/>}/>
        </Routes>
        <Footer/> 
      </DataProvider>
    </div>
  );
}

export default App;
