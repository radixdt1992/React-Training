import React from 'react';


class DataComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>First Name : {this.props.userData.FirstName} </h3>
                <h3>Last Name : {this.props.userData.LastName}</h3>
            </div>
        );
    }
}

export default DataComponent;