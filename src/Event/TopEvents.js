import React, { Component } from 'react';


class TopEvents extends Component {
handleFooter = (value , e) => {
        e.preventDefault();
        alert(value);
    };
 render() {
   return (
    <a href="/" onClick={e => this.handleFooter("back to home", e)}>Back To Home</a>
   );
 }
}
export default TopEvents ;