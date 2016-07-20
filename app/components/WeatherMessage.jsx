const React = require('react');
const {formats} = require('Styles');

module.exports = (props) => {
    let { temp, location } = props.data;
    return (
        <div className="text-center">
            <br />
           <h3><span>{location}<em> - {temp}{formats.temp}</em></span></h3>
        </div>
    );
}