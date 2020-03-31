import React, {Component} from "react";
import axios from 'axios';

export default class Stores extends Component {

  render(){
    return (
      <div>
      <h1>Ethically Approved Shopping</h1>
      <ul className= "nobull">
        <li>
        <a className='stores' href="columbia.com">Columbia</a>
        </li>
        <li>
        <a className='stores' href="www.patagonia.com/home/">Patagonia</a>
        </li>
        <li>
        <a className='stores' href="www.thereformation.com/">Reformation</a>
        </li>
        <a className='stores' href="christydawn.com">Christy Dawn</a>
        </ul>
      </div>
    )
  }
}
