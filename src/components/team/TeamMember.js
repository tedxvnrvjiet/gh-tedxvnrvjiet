import React from 'react'
import './Team.css'
import { FaLinkedin } from "react-icons/fa";


function TeamMember(props) {
  return (
    <div class="our-team mx-4">
    <div class="picture">
      <img class="img-fluid" src={props.ar.url}/>
    </div>
    <div class="team-content">
      <h3 class="title">{props.ar.name}</h3>
      <h4 class="title">{props.ar.post}</h4>
    </div>
    <ul class="social">
      <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><FaLinkedin className='icon' /></a></li>
      <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true"><FaLinkedin className='icon'/></a></li>
    </ul>
  </div>
  )
}

export default TeamMember
