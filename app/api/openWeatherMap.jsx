const Axios = require('axios')
const ApiConfig = require('ApiConfig')


module.exports = {
    getTemp(location) {
       
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${ApiConfig.baseUrl}&q=${encodedLocation}`;

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
