import React from 'react';
import rm from './New Project.png';
import './Roadmap.css';

function Roadmap(){
    return(
        <div class="page">
      <h1 id="Title">RoadMap</h1>
      <div class="rm_lb">
        <div class="roadmap">
          <div class="intcard">
          <div class="badge">
            <img src="https://www.svgrepo.com/show/16732/ribbon-badge.svg" alt="badge" id="bd"/>
            <div class="sc">
              <h3>696/1000</h3>
              <progress id="file" value="69.6" max="100"></progress>
            </div>
            </div>
            <div class="skill">
              <h2>My Skills</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div class="inters">
              <h2>My Interests</h2>
              <ul>
                <li>Web Dev</li>
                <li>Cyber Security</li>
              </ul>

            </div>
          </div>
        </div> 
        <img src={rm} alt="roadmap" id="rmimg"/>
        <div class="leaderboard">
          <h2>Leader-Board</h2>
          <div class="heading"><h2>Name</h2><h2>Rank</h2></div>
          <div class="rank"><h3>ABC</h3><h3>1</h3></div>
          <div class="rank"><h3>DEF</h3><h3>2</h3></div>
          <div class="rank"><h3>GHI</h3><h3>3</h3></div>
          <div class="rank"><h3>JKL</h3><h3>4</h3></div>
          <div class="rank"><h3>MNO</h3><h3>5</h3></div>
        </div>
      </div>

      <div class="msg">
        <img src="https://cdn-icons-png.flaticon.com/512/865/865771.png" alt="msg_logo" id="msg_logo" />
      </div>
      
    </div>

    );
}

export default Roadmap;