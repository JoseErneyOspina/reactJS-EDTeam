import React, {Component} from 'react';

const withLoader = (propValue) => (WrappedComponent) => {
    return class WithLoader extends Component {

        constructor(props){
            super(props)
        }

        render() {
            //Validamos que props nos llegan
            //console.log(this.props);
            return this.props.[propValue].length === 0 
            ? <h1>Cargando ...</h1>
            : <WrappedComponent {...this.props} />
        }
    }
}

export default withLoader;