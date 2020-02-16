const axios = require('axios');


const getLugar = async (param) => {
    const encodedUrl = encodeURI(param);
    // console.log(encodedUrl);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        timeout: 1000,
        headers: {'x-rapidapi-key': 'b21f56600amsh2c876b589847b31p1bbc4cjsna2aa5d419527'}
      });
    //console.log(argv);
    
    // Con Promesas
    // instance.get()
    // .then((resp)=>{
    //     console.log(resp.data.Results[0]);
    // })
    // .catch((err)=>{
    //     console.log(`Error: ${err}`)
    // });    

    // Con Async Await
    const resp = await instance.get()
    if (resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${direccion}`)
    }
    
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {direccion, lat, lng}

}


module.exports = {
    getLugar
};