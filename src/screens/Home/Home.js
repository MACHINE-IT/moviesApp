import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/Header/Header'
import UpcomingMovies from '../UpcomingMovies/UpcomingMovies';

export class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <UpcomingMovies />
            </div>
        )
    }
}

export default Home;
