import React from 'react';

class EvenNumbers extends React.Component {

    render() {
      var rows = [];
      for (var i = 1; i <= 100; i++) {
          if(i%2 == 0){
            rows.push (i);
          }
      }
      return <div><li>{rows+''}</li></div>;
    }
  }

  export default EvenNumbers;