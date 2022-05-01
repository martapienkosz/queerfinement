import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import {motion} from 'framer-motion';
import '../index.css';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({currentTarget}) {    
    console.log(currentTarget.value) // e.currentTarget.value would be equivalent
  }


  render() {
    return (
      <main>

      <div className="header">
            <motion.div className="header-item">
                <Link to="/">
                    <motion.img
                    whileHover={{src: "images/info_h.gif"}}
                    src={"images/menu.png"}/>
                </Link>
            </motion.div>
            <motion.div className="header-item">
                <Link to="/about">
                <motion.img
                    whileHover={{src: "images/info_h.gif"}}
                    src={"images/info.png"}/>
                </Link>
            </motion.div>
          </div>

      <div className='absolute-container'>
      <div className='container' >
        <div className="container_project-info">
          <h1>“Queer-finement”</h1>
          <h2>by Andres, Genie, Juan, Marta</h2>
          <h3 className="container_project-info-more">“Queer-finement” is an art exhibition that recognizes the work of Queer artists that have contributed to the defense of the LGBTQ+ rights movement. The title is a wordplay that reveals both the theme and the subject matter of the exhibition: its purpose is to gather artworks susceptible to prosecution, showcasing them in a prison-themed virtual gallery. This is a conceptual design inspired by Shu Lea Cheang's “3x3x6”, an art Pavilion of her curation hosted in the ancient prison of Palazzo delle Prigioni, which exhibits case studies of incarceration of Queer people.<p>“Queer-finement” is an art exhibition that recognizes the work of Queer artists that have contributed to the defense of the LGBTQ+ rights movement. The title is a wordplay that reveals both the theme and the subject matter of the exhibition: its purpose is to gather artworks susceptible to prosecution, showcasing them in a prison-themed virtual gallery. This is a conceptual design inspired by Shu Lea Cheang's “3x3x6”, an art Pavilion of her curation hosted in the ancient prison of Palazzo delle Prigioni, which exhibits case studies of incarceration of Queer people.</p><p>“Queer-finement” is an art exhibition that recognizes the work of Queer artists that have contributed to the defense of the LGBTQ+ rights movement. The title is a wordplay that reveals both the theme and the subject matter of the exhibition: its purpose is to gather artworks susceptible to prosecution, showcasing them in a prison-themed virtual gallery. This is a conceptual design inspired by Shu Lea Cheang's “3x3x6”, an art Pavilion of her curation hosted in the ancient prison of Palazzo delle Prigioni, which exhibits case studies of incarceration of Queer people.</p></h3>
        </div>
        <div
            class="thumbnail">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="container_project-image" viewBox="0 0 100 100">
                <Link to='/cassils' onClick={this.handleClick}>
                  <circle cx="10" cy="10" r="5" fill="#DDD62A"/>
                </Link>
                <Link to='/zanelemuholi' onClick={this.handleClick}>
                  <circle cx="20" cy="30" r="5" fill="#85AD72"/>
                </Link>
                <Link to='/balbirkrishan' onClick={this.handleClick}>
                  <circle cx="40" cy="50" r="5" fill="#FB9905"/>
                </Link>
                <Link to='/fabianchairez' onClick={this.handleClick}>
                  <circle cx="60" cy="70" r="5" fill="#68F923"/>
                </Link>
                <Link to='/fabianchairez' onClick={this.handleClick}>
                  <circle cx="80" cy="70" r="5" fill="#68F923"/>
                </Link>
                <Link to='/fabianchairez' onClick={this.handleClick}>
                  <circle cx="90" cy="90" r="5" fill="#68F923"/>
                </Link>
              </svg>
            </div>
        </div>
        </div>
      </div>
    </main> 
    )
  }
}

export default Home