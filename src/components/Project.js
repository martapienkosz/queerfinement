import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import '../index.css';

import { useWindowWidth } from '@react-hook/window-size'

const Project = (props) => {

    const {title, name, src, date, info, bio, description, connection} = props;
    const onlyWidth = useWindowWidth();
    
  return (
    <>
    <main>
    <div className="header">
            <div className="header-item">
                <Link to="/">
                    <img
                    whileHover={{src: "images/info_h.gif"}}
                    src={"images/menu.png"}/>
                </Link>
            </div>
            <div className="header-item">
                <Link to="/about">
                <img
                    whileHover={{src: "images/info_h.gif"}}
                    src={"images/info.png"}/>
                </Link>
            </div>
          </div>

      <div className='absolute-container'>
      {onlyWidth > 1180 ?
      <div className='container' >
        <div className="container_project-info">
          <h1>{title} ({date})</h1>
          <h2>by {name}</h2>
          <h3 className="container_project-info-more">
            <h4>{info}</h4>
            <br></br>
            <h4>Description</h4>
              <p>{bio}</p>
              <br></br>
              <h4>About the artists</h4>
              <p>{description}</p>
              <br></br>
              <h4>Connection to the Curatorial Theme</h4>
              <p>{connection}</p></h3>
        </div>
        <div class="thumbnail">
            <div className="container_project-image">
                <div>
                    <img src={src}/>
                </div>
            </div>
          </div>
        </div> : 
        <div className='container' >
        <div class="thumbnail">
            <div className="container_project-image">
                <div>
                    <img src={src}/>
                </div>
            </div>
          </div>
          <div className="container_project-info">
          <h1>{title} ({date})</h1>
          <h2>by {name}</h2>
          <h3 className="container_project-info-more">
            <h4>{info}</h4>
            <br></br>
            <h4>Description</h4>
              <p>{bio}</p>
              <br></br>
              <h4>About the artists</h4>
              <p>{description}</p>
              <br></br>
              <h4>Connection to the Curatorial Theme</h4>
              <p>{connection}</p></h3>
        </div>
        </div>}
      </div>
    </main> 
    </>
  )
}

export default Project