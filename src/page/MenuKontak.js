
import React, { Component } from 'react';

class MenuKontak extends Component{
  constructor(props){
    super(props);
    this.state={
      alamat:'Jalan Dr. Wachidin No.32 Sampangan Pekalongan',
      kontak:'08545678900'
    }
  }
    render(){
      return(
        <div>
          <center>
            <h3>{this.state.alamat}</h3>
          <h4>Kontak Kami:</h4>{this.state.kontak}
          </center>
        </div>
       
      );
    }
  }
  
  export default MenuKontak;