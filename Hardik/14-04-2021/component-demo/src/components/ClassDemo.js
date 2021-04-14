import React from 'react'

class ClassDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] }
    }
    componentDidMount() {
        this.fetchAPI().then(response => {
            console.log(response);
            this.setState({ todos: response.data })
            console.log(this.state.todos);
        })


    }
    async fetchAPI() {
        return fetch("https://gorest.co.in/public-api/users").then(response => response.json());
    }
    // changeState = () => {

    // }

    render() {

        // for (const [i, data] of this.state.todos[0].entries()) {
        //     list.push(<li>{data}</li>)
        //   }

        // const listItems = this.state.todos[0].map((number) =>
        //     <li>{number}</li>
        // );

        // var list = [];

        // // console.log(this.state.todos)
        // this.state.todos.forEach((data) => {
        //     list.push(
        //         <div>
        //             <li>Id : {data.id}</li>
        //             <li>Name : {data.name}</li>
        //             <li>Email : {data.email}</li>
        //             <li>Gender : {data.gender}</li>
        //             <li>Status : {data.status}</li>
        //             <br></br>
        //         </div>
        //     )
        // })

       const listItems  = this.state.todos.map((data) =>
            <div>
                <ul>
                <li>Id : {data.id}</li>
                <li>Name : {data.name}</li>
                <li>Email : {data.email}</li>
                <li>Gender : {data.gender}</li>
                <li>Status : {data.status}</li>
                </ul>
            </div>
        );

        return (<div>{listItems}
            {/* ​​​​​<ul>{this.state.todos}</ul>​​ */}
        </div>);
    }
}



export default ClassDemo;
