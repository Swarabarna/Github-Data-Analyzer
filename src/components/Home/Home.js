import React, { Component } from 'react'
import './Home.css';
import ReactMarkdown from 'react-markdown'
import photo from './pic.png'

class Home extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     markdownSrc: [
        //     `This is the Homepage`
        //     ].join(''),

        //     htmlMode: 'raw'
        // };
    }
    render () {
        return (
            <div className="row">
                <div className="logo">
                    <img src={photo} width="900" height="450"    />
                </div>
             </div>
        );
    }
}

export default Home