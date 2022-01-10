import React from 'react';
import './Ethnic.css';

class Ethnic extends React.Component {
    state = { minimumScore: 20, thresholdScore: 99, searchTerm: ''}

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.minimumScore, this.state.thresholdScore, this.state.searchTerm);
    }

    render() {
        return (
            <div className="ui container relaxed divided">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui fluid input">
                        <input type="text" placeholder="Name" value={this.state.searchTerm} onChange={(e) => this.setState({searchTerm: e.target.value})}  />
                    </div>
                    <div className="ui grid">
                        <div className="eight wide column">
                            <div className="ui fluid">Minimum Score</div>
                            <div className="ui input">
                                <input type="number" value={this.state.minimumScore} onChange={(e) => this.setState({minimumScore: e.target.value})} />
                            </div>
                        </div>
                        <div className="eight wide column">
                            <div className="ui fluid">Threshold Score</div>
                            <div className="ui input">
                                <input type="number" value={this.state.thresholdScore} onChange={(e) => this.setState({thresholdScore: e.target.value})} />
                            </div>
                        </div>
                    </div>
                    <button className="ui primary button" type="submit">
                        Search
                    </button>
                </form>

                <div className="ui placeholder segment">
                    <div className="ui icon header">
                       Search not conducted
                    </div>
                </div>
            </div>
        )
    }
}

export default Ethnic;
