const Axios = require('axios');
const ApiConfig = require('ApiConfig');
const OPEN_WEATHER_MAP_URL = ApiConfig.baseUrl;


module.exports = {
    getTemp(location) {
       
        let encodedLocation = encodeURI(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}?appid=${ApiConfig.appId}&q=${encodedLocation}&units=${ApiConfig.units}`

        return Axios.get(requestUrl).then ( 
            
            res => {           
                if (res.data.cod && res.data.message ) {
                    throw new Error(res.data.message);
                } else {
                    return res.data;
                } 
            }, 
        
            res => { throw new Error(res.data.message) } 
        );
    }
}
