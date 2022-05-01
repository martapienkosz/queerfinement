import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import {AnimatePresence} from "framer-motion"
import Home from './components/Home'
import Project from './components/Project'

import './index.css';

const data = [
  {
    src : "images/cassils.jpeg",
    url: "cassils",
    title : "Pissed",
    name: "Cassils",
    date: "2017",
    info : "They/them, South Africa, Glass Cube & Urine, Performance",
    bio: "Cassils is a Canadian transgender artist, activist, body builder, performer, and personal trainer based in Los Angeles California. They graduated with a BFA from NSCAD, which influenced their early political and feminist work. In 2002 they also received an MFA from the California Institute of the Arts on a merit scholarship. They are recognized for using their body in their art to encompass the history of LGBTQI+ violence, representation, struggle for survival. They are the recipient of the 2020 Fleck Residency from the Banff Center for the Dramatic Arts, a Princeton Lewis Artist Fellowship finalist, among others. Cassils’s work was recently acquired by the Victoria Albert Museum, London, Art Gallery of Ontario, Toronto and the Leslie Lohman Museum. “It seems insane that I have to make a cube of piss for people to get this idea. I shouldn’t have to make this. I shouldn’t have to hold my own urine. It’s crazy that we have to go to these extremes but this is the culture that we’re living in.“ says Cassils.",
    description: "Trump’s administration reversed Obama government’s executive order to allow transgender students to use a bathroom according to their chosen gender identity. Consequently, Cassils collected every drop of their urine during the following 200 days of this decision and displayed it in a 200 gallon glass cube for their artwork Pissed. This glowing tank of urine is accompanied by a two-hour sound piece featuring arguments from the case of Gavin Grimm, his pleas to pee and a soundscape of flowing water and flushing. Towards the end of the 200 days Cassils also stood in front of 255 orange medical bottles in a grid pattern marked with their respective date, drank water, and peed to an audience.",
    connection: "As per the artist words, Pissed depicts “the physical burden placed on an individual body when bathroom access is restricted by discriminatory policy.” This artwork of body politics, comments on the discrimination, confiment and constraints placed on the LGBTQ community through laws and legislations. It highlights how current systems of power have the right to prevent transgender people from using a restroom according to their gender, forcing them to give out their right to their gender identity or their right to pee."
  },
  {
    src : "images/zanelemuholi.jpeg",
    url: "zanelemuholi",
    title : "ID Crisis",
    name: "Zanele Muholi",
    date: "2003",
    medium : "They/them, South Africa, Photography",
    bio: "Zanele Muholi is a South African social activist and visual artist. Their works aim to confront the stereotypes and taboos faced by the black LGBTQI + community in South Africa, thus aiming to change the way bodies are perceived. Muholi was trained at the Market Photo Workshop in Johannesburg, an organization founded in 1989 by South African photographer David Goldblatt (1930–2018).Through their work, Muholi challenges other photographers working in Africa to question the presentation of sexual and gender identities. They artistic activism aims to make the life of the queer community at the center of South Africa's political and artistic debates.",
    description: "ID Crisis (2003) features a slim young woman carefully wrapping bandages around her breasts, inviting us to an intimate attempt to disguise her anatomy. Beauty and suffering coexist in this photograph, revealing an intimate perspective on the challenges faced by black lesbians. The woman's head is partially cropped, making the woman's identity a secondary theme. The art therefore focuses on exploring collective experiences rather than the struggle of the individual. This photograph is part of the 'Only Half the Picture' series, whose titles allude to the intolerance and violence faced by the black LGBTQI + community in South Africa, despite the liberal nature of the country's constitution."
  },
  {
    src : "images/balbirkrishan.jpeg",
    url: "balbirkrishan",
    title : "ID Crisis",
    name: "Zanele Muholi",
    info: "They/them, South Africa",
    date: "2003",
    medium : "They/them, South Africa, Photography",
    bio: "Zanele Muholi is a South African social activist and visual artist. Their works aim to confront the stereotypes and taboos faced by the black LGBTQI + community in South Africa, thus aiming to change the way bodies are perceived. Muholi was trained at the Market Photo Workshop in Johannesburg, an organization founded in 1989 by South African photographer David Goldblatt (1930–2018).Through their work, Muholi challenges other photographers working in Africa to question the presentation of sexual and gender identities. They artistic activism aims to make the life of the queer community at the center of South Africa's political and artistic debates.",
    description: "ID Crisis (2003) features a slim young woman carefully wrapping bandages around her breasts, inviting us to an intimate attempt to disguise her anatomy. Beauty and suffering coexist in this photograph, revealing an intimate perspective on the challenges faced by black lesbians. The woman's head is partially cropped, making the woman's identity a secondary theme. The art therefore focuses on exploring collective experiences rather than the struggle of the individual. This photograph is part of the 'Only Half the Picture' series, whose titles allude to the intolerance and violence faced by the black LGBTQI + community in South Africa, despite the liberal nature of the country's constitution."
  },
  {
    src : "images/fabianchairez.jpeg",
    url: "fabianchairez",
    title : "La Revolución",
    name: "Fabián Cháirez",
    date: "2014",
    info : "He/him, México, Oil Canvas",
    bio: "Fabián Cháirez, born in Chiapas Mexico in 1987 is an internationally recognized plastic artist. He obtained a degree in Visual Arts in the Universidad de Ciencias y Artes de Chiapas. His work is centered around the redefinition of masculinity, sexuality, and oppression on sexual expression. The themes of male virility, feminization, and Mexican masculine stereotypes are commonly found in his artwork, usually oil paintings, illustrations or drawings. The paintings have a Neoclassical style with hints to Pre-Raphaelite and Symbolic movements. One of his paintings, La Revolución caused public commotion during 2019, when it was published in El Palacio de Bellas Artes, and the descendants of the portrayed figure threatened with legal action for “defamation.”",
    description: "This oil painting on a 30 x 20 cm piece of  fabric portrays Emiliano Zapata, a recognized military official during the Mexican Revolution and figure associated with Mexican masculinity, naked on a horse. Zapata is wearing a pink traditional sombrero, black heels and a ribbon with the Mexican flag wrapping his body. He is naked otherwise, and hides his genitals through a stereotypically feminine pose. The white horse he is in, has a very visible penis with an erection.  The artwork was first shown during 2015 and 2016 in the Galería José María Velasco Gallery. It was chosen by the Mexican Secretary of Culture for an exhibition Emiliano: Zapata después de Zapata which was faced with legal action from Zapata’s family, civilian protests, and defended by the government and LGBTQI+ Activists.",
    connection: "This piece by Zapata comments on the constraints placed on men in Mexican society. By portraying a historical figure associated with masculinity in a defying way, this artist is attempting to break the stigmas and stereotypes present in Mexican, and global society. Stigmas which are evidenced by civilian protests and backlash from Zapata’s family. La Revolución questions the audience on how one can break from the historical  colonial framework of gender stereotypes."
  }
]

const App = () => {
  return (
    <>
      <Router>
      <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route exact path="/" element={<Home projectArray = {data}/>} />
              {data.map((image) => {
                console.log(image.subtitle)
                return (
                    <Route path={image.url} element={<Project src={image.src} url= {image.url} title = {image.title} name= {image.name} info={image.info} date={image.date} bio= {image.bio} description = {image.description} connection = {image.connection}/>} />
                )}
              )}
        
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
