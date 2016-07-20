const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const OWM = require('OpenWeatherMap');


const Weather = React.createClass({

    getInitialState() {
        return {
           isLoading: false
        };
    },

    handleSearch(location) {
        this.setState({ isLoading: true });
        OWM.getTemp(location).then ( 
             temp  => this.setState({ isLoading: false, location: location, temp: temp}), 
             err   => {  
                        this.setState({ isLoading: false}) 
                        alert(err)
                      }
        );
    },

    render() {
        let { isLoading, temp, location } = this.state;
        let renderMessage = ()  => {
            if (isLoading) {
                return <h3>Fetching Weather...</h3>
            } else if (temp && location) {
                return  <WeatherMessage data={{temp: temp, location: location}} />
            }
        }

        return (
            <div>
                <h2>Get Weather</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;