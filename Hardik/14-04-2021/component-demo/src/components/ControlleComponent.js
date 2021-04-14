import React from 'react';

class ControlleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "", address: "", stateinfo: "", gender: "", hobbies: [],
            selectedhobbies: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(target.name);
        if (target.name == "hobbies") {
            this.setState.selectedhobbies += target.value + ",";
        }
        else {
            //this.setState(name:value)//single property assign
            this.setState({ [name]: value })//multiple property assign
        }

        // this.setState({
        //     name: event.target.name, 
        //     address: event.target.address, 
        //     stateinfo: event.target.stateinfo, 
        //     gender: event.target.gender, 
        //     hobbies: event.target.hobbies,
        //     selectedhobbies: event.target.selectedhobbies
        // });
    }

    handleSubmit(event) {
        event.preventDefault();
        var message = "";
        for (var i = 0; i < this.state.hobbies.length; i++) {
            message += this.state.hobbies[i] + " ";
        }
        console.log(message);
        alert(this.state.name + "  " + this.state.address + " " + this.state.stateinfo + " " +
            this.state.gender + this.state.selectedhobbies);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name <input type="text" name="name" value={this.state.name}
                        onChange={this.handleInputChange} />
                </label>
                <br></br>
                <label>
                    Address
                <textarea name="address" value={this.state.address} onChange={this.handleInputChange} />
                </label>
                <br></br>
                <label>
                    <select name="stateinfo" value={this.state.stateinfo} onChange={this.handleInputChange}>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option selected value="Mumbai">Mumbai</option>
                        <option selected value="Delhi">Delhi</option>
                        <option value="Chennai">Chennai</option>
                    </select>
                </label>
                <br></br>
                <label>
                    Gender
                    <input name="gender" type="radio" value="Male" onChange={this.handleInputChange} />Male
                    <input name="gender" type="radio" value="Female" onChange={this.handleInputChange} />Female
                </label>
                {/* <label>
                    Hobbies
                    <input name="hobbies" type="checkbox" value="0" onChange={this.handleInputChange}>Hockey</input>
                    <input name="hobbies" type="checkbox" value="1" onChange={this.handleInputChange}>Cricket</input>
                    <input name="hobbies" type="checkbox" value="2" onChange={this.handleInputChange}>Badminton</input>
                </label> */}
                <br></br>
                <input type="submit" value="Submit" />
            </form>

        );
    }
}
export default ControlleComponent;
