import React from 'react';
import '../styles/styles.scss';
import Home from './pages/Home';
import Form from './pages/Form';
import Courses from './pages/Courses';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Course from './pages/Course';
import MainMenu from './organisms/MainMenu';
import History from './pages/History';
import Users from './pages/Users';



const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/cursos/:id" component={ Course } />
      <Route path="/cursos" component={ Courses } />
      <Route path="/historial/:valor" component={ History } />
      <Route path="/historial" component={ History } />
      <Route path="/usuarios" component={ Users } />
      <Route path="/formulario" component={ Form } />
      <Route component={ () => (
        <div clasName="ed-grid">
          <h1>Error 404</h1>
          <span>Pagina no encontrada</span>
        </div>
      )} />
    </Switch>
  </Router>
)

export default App;
