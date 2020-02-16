const axios = require('axios');


const getClima = async (lat, lng) => {
    const latUrl = encodeURI(lat);
    const lngUrl = encodeURI(lng);
    // console.log(encodedUrl);
    
    // const instance = axios.create({
    //     baseURL: `api.openweathermap.org/data/2.5/weather?lat=${latUrl}&lon=${lngUrl}&appid=272a273a8a0b520baa7d5095c2930113&units=metric`,
    //     timeout: 1000,
    //     // headers: {'x-rapidapi-key': 'b21f56600amsh2c876b589847b31p1bbc4cjsna2aa5d419527'}
    //   });
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
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latUrl}&lon=${lngUrl}&appid=272a273a8a0b520baa7d5095c2930113&units=metric`)
    // if (resp.data.main.temp === 0){
    //     throw new Error(`No hay resultados para ${direccion}`)
    // }
    

    return resp.data.main.temp

}


module.exports = {
    getClima

};