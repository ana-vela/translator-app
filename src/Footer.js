import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div id="footer" className="bg-light">
            <p>An app created by <a style={{color: 'blue'}}href="https://github.com/ana-vela">Ana</a> and <a style={{color: 'blue'}} href="https://github.com/huntercallaway">Hunter</a>.</p>
            </div>
        );
    }
}

export default Footer;