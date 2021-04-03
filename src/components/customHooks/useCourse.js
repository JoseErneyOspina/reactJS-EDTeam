import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useCourse = (id) => {

    const [courseState, setCourseState] = useState({})

    useEffect(() => {
        //console.log("hola");
        axios.get(`http://my-json-server.typicode.com/JoseErneyOspina/json-db/cursos/{${id}`)
        .then(resp => setCourseState(resp.data))
    }, [])

    return courseState
}

export default useCourse;