
import React, { Component } from 'react';

class TentangKami extends Component{
  constructor(props){
    super(props);
    this.state={
      tentang: 'Warung Nusanatara adalah Restoran Terkenal Yang Menyajikan Masakan Nusantara'
    }
  }
    render(){
      return(
        <div>
          <center>
          <p>Tentang Kami</p>{this.state.tentang}
          </center>
        </div>
       
      );
    }
  }
  
  export default TentangKami;