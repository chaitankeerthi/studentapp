import './App.css';
import './student.css';
import Dashboard from './dashboard';
import Navbar from './navbar';
import{Routes,Route} from 'react-router-dom'
import Studentdetails from './studentdetails';
import Courses from './courses';
import Grades from './grades';
import Pagenotfound from './pagenotfound';
import Login from './login';
import Students from './student';
import Protect from './protect';

function App() { 
  return (
   
  <>
  <Navbar/>
  <Routes>
    <Route path='/dashboard' element={
    <Protect>
      <Dashboard/>
      </Protect>
    }/>
   <Route path='/students' element={<Students/>}>
    <Route path='/students/:studentid' element={<Studentdetails/>}/>
  
   </Route>
    <Route path='/courses' element={<Courses/>} />
    <Route path='/grades' element={<Grades/>} />
    <Route path='/' element={<Login/>} />
    <Route path='*' element={<Pagenotfound/>} />
  </Routes>
  
  </>
  );
}
export default App;