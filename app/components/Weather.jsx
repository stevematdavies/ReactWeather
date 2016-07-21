const React = require('react')
const WeatherForm = require('WeatherForm')
const WeatherMessage = require('WeatherMessage')
const OWM = require('OpenWeatherMap')
const ErrorModal = require('ErrorModal')


const Weather = React.createClass({

    getInitialState() {
        return {
           isLoading: false,
           errorMessage: undefined

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
                    this.setState({ 
                        isLoading: false,
                        errorMessage: err.message
                    }) 
             }
        );
    },

    render() {
        
        let { isLoading, temp, location, name, errorMessage } = this.state;
        
        let renderMessage = ()  => {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>
            } else if (temp && location) {
                return  <WeatherMessage data={{temp: temp, location: name}} />
            }
        }

        let renderError = () => {
            if (typeof errorMessage === 'string') {
                return <ErrorModal message={errorMessage}/>
            }
        }

        return (
            <div className="text-center">
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;