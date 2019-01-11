import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MovieDetail from './components/MovieDetail';
import ViewData from './components/ViewData';
class App extends Component {
    render() {
        return (
            <div>
                
                    <Route exact path="/" component={ViewData} />
                    <Route exact path="/movie/:id" component={MovieDetail} />
                
            </div>
        );
    }
}

export default App;
