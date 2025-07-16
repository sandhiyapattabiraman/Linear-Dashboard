import './App.css'
import Issues from './pages/issues'
import SideBar from './components/SideBar'
import Project from './pages/Projects'
import View from './pages/Views'
import Inbox from './pages/Inbox'
import MyIssues from './pages/MyIssues'
import Views2 from './pages/Views2'
import Projects2 from './pages/Projects2'
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <div className='bg-black h-screen w-full flex cursor-default'>
          <SideBar/>
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Navigate to="/issues" replace />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/views" element={<View />} />
              <Route path="/myissues" element={<MyIssues />} />
              <Route path='/issues' element={<Issues/>} />
              <Route path='/inbox' element={<Inbox/>} />
              <Route path='/views2' element={<Views2/>}/>
              <Route path='/projects2' element={<Projects2/>}/>
              
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  )
}
export default App

