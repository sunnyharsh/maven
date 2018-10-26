import React, { Component } from 'react';
import logo from '../download.png';
export class ProfilePic extends Component{
    constructor(){
        super();
    }
    render() {
        return (
            <div className="profile_pic">
                <div className="basic_info">
                <ul>
                    <li>
                    <img src={logo} className="App-logo" alt="logo" />
                    </li>
                    <li className="name">ruby <br/> <span>Noida , india</span></li>
                </ul>
               <div>
                   <ul>
                       <li>
                            <span className="marks">
                            <span className="percentage">92%</span> <br/> matched
                            </span>
                       </li>
                       <li className="contacts">
                           <span>phone:</span> +917017397802 <br/>
                           <span>email:</span> sunny.kr.hr@gmail.com <br/>
                           <span>applied:</span> software dev.
                       </li>
                   </ul>
               </div>
               <div className="checkbox">
                   <input type="checkbox"/>
               </div>
                </div>
            </div>
        )
}
}