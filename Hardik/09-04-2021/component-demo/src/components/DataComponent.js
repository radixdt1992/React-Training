import React from 'react';


class DataComponent extends React.Component {
    render() {
        return (
            <h3>First Name : {this.props.fname} Last Name : {this.props.lname}</h3>
        );
    }
}

export default DataComponent;