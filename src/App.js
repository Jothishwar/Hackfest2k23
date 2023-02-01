import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import Homenavbar from './components/home/Navbar';
import Homebuttons from './components/home/Content';
import Materials from './components/materials/Materials'
import Assignments from './components/assignment/Assignments';
import Roadmap from './components/roadmap/Roadmap';
import Analysis from './components/analysis/Analysis';
import Certificates from './components/certificates/Certificates';

function App() {  
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={ 
          <> 
            <Homenavbar/> 
            <Homebuttons/> 
          </> 
        }/> 
        <Route path='/home' element={ 
          <> 
            <Homenavbar/> 
            <Homebuttons/> 
          </> 
        }/> 
        <Route  path='analysis' element={
          <>
          <Homenavbar/>
          <div className='analysis_page'>
            <Analysis />
          </div>
          </>
        }/> 
        <Route  path='material' element={
          <> 
            <Homenavbar />
            <Materials isStudent={false} />
          </>
        }/> 
        <Route  path='certificates' element={
          <> 
            <Homenavbar/> 
            <div className='certificates_page'>
              <Certificates />
            </div> 
          </>
        }/> 
        <Route  path='assignments' element={
          <> 
            <Homenavbar/>
            <div className='assignments_page'>
              <Assignments />
            </div>
          </>
        }/> 
        <Route  path='roadmap' element={
          <> 
            <Homenavbar/> 
            <div>
              <Roadmap />
            </div>
          </>
        }/> 
      </Routes>
    </div>
  );
}

export default App;