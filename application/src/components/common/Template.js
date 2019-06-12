import React, { Component } from 'react';
import { Nav } from '..';
import './template.css';

class Template extends Component {
    render() {
        return (
            <div className="bg-layer">
                <div className="fg-layer">
                    <label className="logo">Bruce's Diner</label>
                    <Nav />
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Template;