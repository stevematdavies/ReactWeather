const React = require('react');

const WeatherForm = React.createClass ({

    onFormSubmit(e) {
        e.preventDefault();
        let rawLocation = this.refs.location.value;
        let location = rawLocation.replace(/[0-9]/g, '').trim();
        if( !parseInt(location) && location.length > 0 ) {
             this.refs.location.value = '';
             this.props.onSearch(location);
        }
    },

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="location" placeholder="Enter city name" />
                </div>
                <div>
                    <button className="button expanded hollow">Get Weather</button>
                </div>
            </form>
        );
    }
   
});

module.exports = WeatherForm;