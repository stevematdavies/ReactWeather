const React = require('react');
const {formats} = require('Styles');

module.exports = (props) => {
    let { temp, location } = props.data;
    return (
        <div>
            <p>The current temperature in <strong> {location} </strong> is: <em>{temp} {formats.temp}</em></p>  
        </div>
    );
}