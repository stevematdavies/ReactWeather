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
             (data)  => this.setState ({ 
                 isLoading: false, 
                 location: location, 
                 temp: data.main.temp,
                 name: data.name}), 
             (err) => {  
                    this.setState({ isLoading: false}) 
                    alert(err)
             }
        );
    },

    render() {
        let { isLoading, temp, location, name } = this.state;
        let renderMessage = ()  => {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>
            } else if (temp && location) {
                return  <WeatherMessage data={{temp: temp, location: name}} />
            }
        }

        return (
            <div className="text-center">
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;