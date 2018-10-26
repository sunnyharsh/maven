import React, { Component } from 'react';

export class Info extends Component{
    constructor(){
        super();
    }
    render() {
        return (
            <div>
            <div className="info">
                <ul className="data">
                    <li>submitted: <span>Today</span></li>
                    <li>view: <span>104</span></li>
                    <li>likes: <span>52</span></li>
                    <li>
                        <span></span>
                        
                    </li>
                </ul>
            </div>
            <div className="action">
                <ul>
                    <li>
                        <span>Date:</span><span>25 June 18</span> <br/>
                        <span>Time: 10AM</span>
                    </li>
                    <li>Download</li>
                    <li>message</li>
                </ul>
            </div>
            </div>
        )
}
}