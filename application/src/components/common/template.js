import React from 'react';
import { useSelector } from 'react-redux';
import { Nav } from '../../components';
import './template.css';

const Template = props => {
    const auth = useSelector((state) => state.auth);

    return (
        <div className="bg-layer">
            <div className="fg-layer">
                <label className="logo">Bruce's Diner</label>
                <label className="welcome">Welcome, {auth.email || 'Unknown'}!</label>
                <Nav />
                {props.children}
            </div>
        </div>
    );
}

export default Template;