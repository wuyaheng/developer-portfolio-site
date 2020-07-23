import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './style.scss';

class Resume extends Component {
    render() {
        return (
            <>
            <Navbar />
            <div className="wrapper mb-3">
            <div class="resume row">


  <div class="base col-md-5">
    <div class="profile">
      <div class="photo">
        <img style={{width: "250px"}} src="https://avatars0.githubusercontent.com/u/33443452?s=400&u=6e9d27ba0ffcf16d8760bc9984376d56fae4347c&v=4" alt="self"/>
      </div>
      <div class="info">
        <h1 class="name">Caroline Ning'ang'a</h1>
        <h2 class="job">Full Stack Web Developer</h2>
      </div>
    </div>
    <div class="about"> 
      <h3>About Me</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
    <div class="contact">
      <h3>Contact Me</h3>
      <div class="call"><a href="tel:123-456-7890"><i class="fas fa-phone"></i><span>123-456-7890</span></a></div>
      <div class="address"><a href="https://goo.gl/maps/fiTBGT6Vnhy"><i class="fas fa-map-marker"></i><span>New York, NY</span></a>
      </div>
      <div class="email"><a href="mailto:astronaomical@gmail.com"><i class="fas fa-envelope"></i><span>astronaomical</span></a></div>
      <div class="website"><a href="http://astronaomical.com/" target="_blank" rel="noopener noreferrer"> <i class="fas fa-home"></i><span>astronaomical.com</span></a></div>
    </div>
    <div class="follow">
      <h3>Follow Me</h3>
      <div class="box">
        <a href="https://www.facebook.com/astronaomical/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/astronaomical/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram "></i></a>
        <a href="https://www.pinterest.com/astronaomical/" target="_blank" rel="noopener noreferrer"><i class="fab fa-pinterest"></i></a>
        <a href="https://www.linkedin.com/in/naomi-weatherford-758385112/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
        <a href="https://codepen.io/astronaomical/" target="_blank" rel="noopener noreferrer"><i class="fab fa-codepen"></i></a>
        <a href="https://www.behance.net/astronaomical" target="_blank" rel="noopener noreferrer"><i class="fab fa-behance"></i></a>
      </div>
    </div>
  </div>


  <div class="func col-md-7">
    <div class="work">
      <h3><i class="fa fa-briefcase"></i>Experience</h3>
      <ul>
        <li><span>Technical Consultant <br/>Web Design </span><small>Fiserv</small><small>Apr 2018 - Now</small></li>
        <li><span>Web Designer</span><small>Lynden</small><small>Jan 2018 - Apr 2018</small></li>
        <li><span>Intern - Web Design</span><small>Lynden</small><small>Aug 2017 - Dec 2017</small></li>
      </ul>
    </div>
    <div class="edu">
      <h3><i class="fa fa-graduation-cap"></i>Education</h3>
      <ul>
        <li><span>Bachelor of Science<br/>Web Design and Development</span><small>BYU-Idaho</small><small>Jan. 2016 - Apr. 2018</small></li>
        <li><span>Computer Science</span><small>Edmonds Community College</small><small>Sept. 2014 - Dec. 2015</small></li>
        <li><span>High School</span><small>Henry M. Jackson High School</small><small>Jan. 2013 - Jun. 2015</small></li>
      </ul>
    </div>
    <div class="skills-prog">
      <h3><i class="fas fa-code"></i>Programming Skills</h3>
      <ul>
        <li data-percent="95"><span>HTML5</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>
        <li data-percent="90"><span>CSS3 & SCSS</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>
        <li data-percent="60"><span>JavaScript</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>
        <li data-percent="50"><span>jQuery</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>
        <li data-percent="40"><span>JSON</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>
        <li data-percent="55"><span>PHP</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>
        <li data-percent="40"><span>MySQL</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>
      </ul>
    </div>

    <div class="interests">
      <h3><i class="fas fa-star"></i>Interests</h3>
      <div class="interests-items">
        <div class="art"><i class="fas fa-palette"></i><span>Art</span></div>
        <div class="art"><i class="fas fa-book"></i><span>Books</span></div>
        <div class="movies"><i class="fas fa-film"></i><span>Movies</span></div>
        <div class="music"><i class="fas fa-headphones"></i><span>Music</span></div>
        <div class="games"><i class="fas fa-gamepad"></i><span>Games</span></div>
      </div>
    </div>
  </div>
</div>
                </div>  
            </>
        )
    }
}

export default Resume;