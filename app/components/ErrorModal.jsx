const React = require('react');

module.exports = React.createClass({

      componentDidMount() {
        let modal = new Foundation.Reveal( $('#error-modal') )
        modal.open()
     },

     render() {
         return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal=''>
                <h4>Some Title</h4>
                <p>Error message</p>
                <p><button className="button hollow" data-close='' >OK</button></p>
            </div>
        )
     }
})

    