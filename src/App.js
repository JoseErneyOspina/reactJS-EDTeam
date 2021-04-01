import React from 'react';
import './styles/styles.scss';
import Curso from './Curso';

const cursos = [
  {
    "title": "React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "price": 40,
    "profesor": "Beto Quiroga"
  },
  {
    "title": "Drupal desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/43973b1c-a8e2-4863-9252-2ae41377cab2.png",
    "price": 30,
    "profesor": "Yeni P"
  },
  {
    "title": "Go desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png",
    "price": 50,
    "profesor": "Albaro L"
  },
  {
    "title": "HTML desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",
    "price": 10,
    "profesor": "Eduar co"
  },
]

const App = () => (
  <>
    <div className="main-banner img-container" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" alt="hola"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Curso de EDTeam</p>
            <p>Tu futuro te esta esperando</p>
            <a href="https:instagram.com/avenfor_es" className="button">Subscribirte</a>
          </div>
        </div>
      </div>
  </div>
  <div className="ed-grid m-grid-3">
    {
      cursos.map( curso => 
        <Curso 
          title={curso.title} 
          image={curso.image} 
          price={curso.price}
          profesor={curso.profesor}
        />)
    }
  </div>
  </>
)
export default App;
