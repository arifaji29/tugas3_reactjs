
import React, { Component } from 'react';
import Footer from './page/Footer';
import Header from './page/Header';
import MenuKontak from './page/MenuKontak';
import MenuMakanan from './page/MenuMakanan';
import TentangKami from './page/TentangKami';

class app extends Component {
 render() {
   return (
     <div>
      <Header/>
      <MenuMakanan/>
      <TentangKami/>
      <MenuKontak/>
      
      <Footer/>
     </div>
   );
 }
}
export default app ;