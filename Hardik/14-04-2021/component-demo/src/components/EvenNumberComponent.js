import React from 'react';

class EvenNumbers extends React.Component {

    render() {
      var rows = [];
      for (var i = 1; i <= 100; i++) {
          if(i%2 === 0){
            rows.push(<li>{i}</li>);
          }
      }
      return <div>{rows}</div>;
    }
  }

  export default EvenNumbers;