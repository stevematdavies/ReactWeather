const React = require('react');
const { Link } = require('react-router')

module.exports = () => 
    
    <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
            <li><Link to="/?location=Turku,Finland">Turku, Finland</Link></li>
            <li><Link to="/?location=London,UK">London, UK</Link></li>
        </ol>
    </div>