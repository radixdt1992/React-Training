import React from 'react';

class ClockComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h3 className="text-white pl-3 pt-2">Timer : {this.state.date.toLocaleTimeString()}</h3>
            </div>
        );
    }
}
export default ClockComponent;
