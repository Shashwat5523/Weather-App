import React,{useState,useEffect} from 'react';

import './style.css';
const Weather= () => {
    const [data,setData] = useState({});
    const [location,setLocation] =useState('');

    const url={
        base:"https://api.openweathermap.org/data/2.5/",
        key:'ca0a7ed9fc4cb0018542d3627d0513c0'
    }

    const searchLoc=(event) => {
        if(event.key==='Enter')
        {
         fetch(`${url.base}weather?q=${location}&units=metric&APPID=${url.key}`)
        .then(res => res.json())
        .then(result=> setData(result));
        }  
    
};


    return (
    <div className='app'>
        <div className='container'>
            <input type='text'
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLoc}
            placeholder='Search Location'
            />
            <div className='header'>
                <div className='location'>
                    <h2>{data.name}</h2>
                </div>
                <div className='temp1'>
                    {data.main?<h1>({data.main.temp})°C</h1>:null}
                </div>
            </div>
            {data.name!==undefined && 
            <div className='footer'>
                <div className='weather'>
                    {data.weather?<p>{data.weather[0].main}</p>:null}
                    <p>Weather</p>
                </div>
                <div className='temp2'>
                    {data.main?<h4>{data.main.feels_like}</h4>:null}
                    <h4>Feels Like</h4>
                </div>
                <div className='humidity'>
                    {data.main?<p>{data.main.humidity}</p>:null}
                    <p>Humidity</p>
                </div>
            </div>
}
        </div>
    </div>
       
        
    );
};
export default Weather;