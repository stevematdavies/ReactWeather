const React = require('react');

module.exports = React.createClass({

        propTypes: {
            title: React.PropTypes.string,
            message: React.PropTypes.string.isRequired
        },

       getDefaultProps() {
           return {
                title: 'Error'
           };
       },

      componentDidMount() {
        let modal = new Foundation.Reveal( $('#error-modal') )
        modal.open()
     },

     render() {

         let {title, message } = this.props

         return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal=''>
                    <h3>{title}!</h3>
                    <p><span className="alert label"><strong>{message}</strong></span></p>
                    <p><button className="small secondary hollow button" data-close=''>OK</button></p>
            </div>
        )
     }
})

    