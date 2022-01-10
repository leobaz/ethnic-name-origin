import React from 'react';

const EthnicList = (props) => {
    const ethnics = props.data.map((ethnic) => {
        return (
            <div className="ui container relaxed divided card">
                <div className="content">
                    <div className="header">{ethnic.name}</div>
                </div>
                <div className="extra content">
                    <div className="summary">
                    <i className="star icon"></i> Score: {ethnic.score} ({ethnic.individuality})
                    </div>
                </div>
                <div className="extra content">
                    <div className="summary">
                    <i className="bookmark icon"></i> Gender: {ethnic.gender}
                    </div>
                </div>
                <div className="extra content">
                    <div className="summary">
                    <i className="life ring outline icon"></i> Names: {ethnic.names}
                    </div>
                </div>
            </div>
        );
    });
        return <div>{ethnics}</div>;
}

export default EthnicList;
