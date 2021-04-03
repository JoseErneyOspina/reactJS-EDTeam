import React, {useState, useEffect } from 'react';
import useCourse from '../customHooks/useCourse';
import axios from 'axios';
    
const Course = ({ match, c }) => {

/*     const [courseState, setCourseState] = useState({}) */
    const [commentState, setCommentState] = useState("sin comentarios")
    const courseState = useCourse(match.params.id)

/*     useEffect(() => {
        //console.log("hola");
        axios.get(`http://my-json-server.typicode.com/JoseErneyOspina/json-db/cursos/${match.params.id}`)
        .then(resp => setCourseState(resp.data))
    }, []) */

    const myComment = (e) => {
        setCommentState(e.target.value)
    }

    return (
        <div clasName="ed-grid m-grid-3">
        {
            courseState ? (
                <div className="ed-grid">
                    <div className="l-block">
                        <h1 className="m-cols-3" >Curso: { courseState.title } </h1>
                        <img  className="m-cols-1" src={ courseState.image } alt={ courseState.title }/>
                        <p className="m-cols-2">Profesor: { courseState.professor}</p>
                    </div>
                    <div className="ed-grid">
                        <h2>Escribe tu comentario</h2>
                        <inpu type="text" placeholder="Escribe ..." onChange={myComment.bind(this)}></inpu>
                        <p>{commentState}</p>
                    </div>
                </div>
            )
            :
                <h1> El curso no existe </h1>
        }
        </div>
    )
}

export default Course;
