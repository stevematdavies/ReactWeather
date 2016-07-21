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

    /* Fired when props change
     * E.g. when url changes with
     * new location */    
    componentWillReceiveProps(newProps){
        let location = newProps.location.query.location;
        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },


    componentDidMount() {
        let location = this.props.location.query.location;
        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },

    handleSearch(location) {
        this.setState({ 
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });


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
                <h1 className="page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;