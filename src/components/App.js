import React from 'react';
import api from '../apis/backend-data';
import EthnicList from './ethnic-list/EthnicList';
import Ethnic from './ethnic/Ethnic';
import Header from './header/Header';

class App extends React.Component {
    state = { results: [] };

    onSearchSubmit = async (minimumScore, thresholdScore, searchTerm) => {
        if(searchTerm) {
            const response = await api.get('/ethnic-origin', {
                params: {
                    minimumScore,
                    searchTerm,
                    thresholdScore
                }
            });
    
           this.setState({results: response.data});
       console.log(this.state.results);
        }

    }
    render() {
        return (
            <div className="ui">
                <Header />
                <Ethnic onSubmit={this.onSearchSubmit} />
                <EthnicList data={this.state.results} />
            </div>
        );
    }
    
};

export default App;