import React, { Component } from 'react';

class UncontrolleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.address = React.createRef();
        this.stateinfo = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.name.value + "  " + this.address.value + " " + this.stateinfo.value);
        // event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name <input type="text" ref={input => this.name = input} />
                </label>
                <br></br>
                <label>
                    Address
                <textarea ref={input => this.address = input} />
                </label>
                <br></br>
                <label>
                    <select name="stateinfo" ref={input => this.stateinfo = input}>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Mumbai">Mumbai</option>
                        <option selected value="Delhi">Delhi</option>
                        <option value="Chennai">Chennai</option>
                    </select>
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>

        );
    }
}
export default UncontrolleComponent;
