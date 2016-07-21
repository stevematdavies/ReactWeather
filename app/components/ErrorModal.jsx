const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

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

         let { title, message } = this.props

         let modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal=''>
                    <h3>{title}!</h3>
                    <p><span className="alert label"><strong>{message}</strong></span></p>
                    <p><button className="small secondary hollow button" data-close=''>OK</button></p>
            </div>
        );
         
        let $modal = $(ReactDOMServer.renderToString(modalMarkup))
        $(ReactDOM.findDOMNode(this)).html($modal)


        let modal = new Foundation.Reveal( $('#error-modal') )
        modal.open()
     },

     render() {
         return <div></div>
     }
})

    