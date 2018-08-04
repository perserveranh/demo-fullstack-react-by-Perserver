import React, { Component } from 'react';
import logo from '../../angry-solid.svg';
import './../../App.css';


class Home extends Component {
    render() {
        const imgs = [
            { logo: logo }, { logo: logo },
            {
                logo: logo
            },
            {
                logo: logo
            },
            {
                logo: logo
            },
            {
                logo: logo
            },
            {
                logo: logo
            },
            {
                logo: logo
            },
            {
                logo: logo
            },
            {
                logo: logo
            },

        ];
        const a = ['one', 'tow', 'three', 'for', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
        var result = imgs.map((img, index) => {
            return (
                <img key={index} src={img.logo} className="App-logo pd-10" alt="logo" />
            )
        });
        var result2 = a.map((i) => {
            return (
                <li className="pd-10" key={i}> <a>{i}</a></li>

            );
        })
        return (
            <div className="App" >
                <header className="App-header">
                    {result}
                </header>
                <ul>
                    {result2}
                </ul>
                <span style={{ height: '100px ' }}></span>
            </div>
        );
    }
}
export default Home;
