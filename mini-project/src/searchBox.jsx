import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css'
import { useState } from 'react';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

// Actual URL OF THE API - "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"

export default function SearchBox({updateInfo}){
    let[city, setCity] = useState('');
    let[error, setError] = useState(false);

    const API_URL = process.env.API_URL;
    const API_KEY = process.env.API_KEY;

    let getWeatherInfo = async() => { // By this function we will call the API to get the info ***** we don"t need to provide the "city" parameter...
                                    //... inside the function, as "city" is a "state variable" and any function can access it 
        
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`) // We have to send request to this API_KEY with the query string
            let jsonResponse = await response.json(); // convert the response to json format 
            console.log(jsonResponse);
            let result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                // pressure: jsonResponse.main.pressure,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
    
            };
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }    

    };

    let handleChange = (event) => { // The handleChange function ensures that as you type in the text field,...
    // ... the city state gets updated with the latest input, enabling the component to render with the current value
        setCity(event.target.value);
    }

    let handleSubmit = async(event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity('');
            let newinfo =await getWeatherInfo();
            updateInfo(newinfo);
        }catch(error){
            setError(true);
        } 
    }
    return (
        <div className="searchBox">
            <h3>Search for weather</h3>
            <form onSubmit={handleSubmit}>  {/* while clicking the submit button,the handleSubmit function will be called */}
            <TextField 
            id="city" 
            label="City Name" 
            variant="outlined"
            required 
            value={city}
            onChange={handleChange}
            /> {/* "required" will make the field mandatory */} {/*For TextField element we use onChange not onClick event-handeler */}
            
{/*Role of onChange={handleChange} in TextField ->
The onChange prop in the TextField is an event handler that gets 
triggered every time the user types something into the input field.
By assigning handleChange to this prop, you are telling the TextField 
to call the handleChange function every time a change event occurs (i.e., whenever the user types or deletes a character).
This ensures that the state (city) is always in sync with the value in the input field. */}
            <br></br><br></br>
            <Button variant="contained" color="success" type="submit"> {/* type should be submit to make the required function work */}
                Search
            </Button>
            {error && <p style= {{color: "red"}}>City not found in database</p>}
            </form>
        </div>
    )
};


