import axios from 'axios';
import React, { Component} from 'react';
import CourseGrid from '../organisms/CourseGrid';


class Courses  extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cursos: []
        }
    }

    componentDidMount() {
        axios.get('http://my-json-server.typicode.com/JoseErneyOspina/json-db/cursos')
        /* .then(resp => console.log(resp) ) */
        .then(resp => this.setState({
            courses: resp.data
        }))
    }

    render() {

        const { courses } = this.state

        return (
            <CourseGrid courses={courses}/>
        )
    }
}

export default Courses;