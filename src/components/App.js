import React, { Component } from "react";
import InfoCuenta from "./InfoCuenta.js";



export default class App  extends Component {
  state = {
    InfoCuenta: []
    , status: false
  }
  // cargarInfoCuenta = () => {
  //   var url = 'https://run.mocky.io/v3/d3586928-f1a4-48d2-9a0e-1140bab1e562';
  //   axios.get(url).then(res => {
  //       this.setState({
  //           InfoCuenta: res.data
  //           , status: true
  //       });
  //       console.log(res.data.result.balance.result.total);
  //   });
  // }
  // componentDidMount = () => {
  //   this.cargarInfoCuenta();
  // }

 render ()
 { 
 
  return (
    
    <div className="App">
       <InfoCuenta />
    </div>
  );}
}



