const React = require('react');
const { Link } = require('react-router')

module.exports = () => 
    
    <div className="text-center">
        <h1>Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <div className="callout primary medium">
            <ol className="menu menu-center">
                <li><Link to="/?location=Turku,Finland">Turku,Finland</Link></li>
                <li><Link to="/?location=London,UK">London,UK</Link></li>
                <li><Link to="/?location=Miami,Fl">Miami,Fl</Link></li>
            </ol>
        </div>
    </div>