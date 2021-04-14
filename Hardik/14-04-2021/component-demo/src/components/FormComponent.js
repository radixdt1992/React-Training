import React from 'react';

class LogInFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // data: { username: "", password: "" },
            username: "", password: "" ,
            errors: {}
        };

          this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate = () => {
        const errors = {};

        if (this.state.username === '')
            errors.username = 'Username is required!';

        if (this.state.password === '')
            errors.password = 'Password is required!';
        console.log(this.state)
        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleChange(event) {
        // const errors = { ...this.state.errors };
        // const data = { ...this.state.data };
        //   this.setState({value: event.target.value});
        // console.log(event.target.name)
        // this.setState({ 
        //     username: event.target.username,
        //     password: event.target.password
        //  });
        const target = event.target;
        const value = target.value;
        const name = target.name;

         this.setState({ [name]: value })
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();

        const errors = this.validate();
        

        // this.state({errors});

        if(errors == null){
            console.log("Submitted");
            return;
        } 
        else{
            console.log(errors);
        }

        
    }

    render() {
        return (
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    {/* <label>
                    Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label> */}
                    <label>Username :</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                    <br></br>
                    <label>Password :</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default LogInFormComponent;