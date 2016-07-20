const React = require('react');
const Navigation = require('Navigation');

module.exports = props => 
    
        <div>
            <Navigation />
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
    
        </div>