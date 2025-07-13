import "./infoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}) {
  const INIT_URL = "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=MQ6ONlYlQ75EzP0d9wX-VTcR_LtAjYXALooBxaCCNcs="
  const HOT_URL = "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=612x612&w=0&k=20&c=LwLCGF902C-DNwKgCMCR12zFnB4g1INWzlk1JPOidRk=";
  const COLD_URL = "https://media.istockphoto.com/id/1197295830/photo/winter-morning-at-kolkata-maidan-shrouded-in-a-thick-dense-fog.webp?a=1&b=1&s=612x612&w=0&k=20&c=WKXL1t1HIv4aLow4JJmWITFywwB3n-vrT0-IlNVZo3w=";
  const RAIN_URL = "https://media.istockphoto.com/id/114313632/photo/rainy-day-apartments.webp?a=1&b=1&s=612x612&w=0&k=20&c=oS6hFXpjTIfmu3IivZP8ZiwwcTXfqoQ5NkfyrJWWpdU=";
  return (
    <div >
      {/* <h3 className="heading">Weather Info - {info.weather}</h3> */}
      <div className="infoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} 
            {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 20 ? <WbSunnyIcon /> : <AcUnitIcon />}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Feels Like = {info.feelsLike}&deg;C</p>
            <p>Humidity = {info.humidity}%</p>
            <p>Minimum Temperature = {info.tempMin}&deg;C</p>
            <p>Maximum Temperature = {info.tempMax}&deg;C</p>
            <p>
              <i>
                <b>The weather can be described as {info.weather}</b>
              </i>
            </p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
