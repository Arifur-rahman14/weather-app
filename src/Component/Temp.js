import React, { useEffect, useState } from 'react';
import './main.css';



const Temp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Dhaka');

    useEffect( () => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=08d2aab4fa37faf712b2e914cbe92b0d`
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        }

        fetchApi();
    }, [search] );

    return (
        <div>
            <div className="box">
                <div className="inputData">
                    <input type="search"
                    value={search}
                    className="inputField"
                    onChange={ (event) => {
                        setSearch(event.target.value)
                    } } />
                </div>
            </div>
            {!city ? (
                    <p>No Data Found</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className='temp'>
                                {city.temp}° C
                            </h1>
                            <h3 className="tempmin-max">
                                Min : {city.temp_min}° C | Max : {city.temp_max}° C
                            </h3>
                        </div>

                        <div className="wave"></div>
                        <div className="wave-two"></div>
                        <div className="wave-three"></div>
                    </div>
                )
            }

            
        </div>
    );
};

export default Temp;