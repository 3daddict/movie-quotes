import React, { Component } from  'react';
import auth from '../hoc/auth';
import { connect } from 'react-redux';
import { getMovieQuote } from '../actions';

class MovieQuote extends Component {

    componentDidMount(){
        this.props.getMovieQuote();
    }

    render(){
        return (
            <div className="center">
                <h1>Movie Quote!</h1>
                <h4>Random Movie Quote</h4>
            </div>
        );
    }
}

export default connect(null, {
    getMovieQuote: getMovieQuote
})(MovieQuote);