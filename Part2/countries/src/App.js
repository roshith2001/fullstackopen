import { useEffect, useState } from "react";
import axios from "axios";

import Input from './components/Input'
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

function App() {

  const [countryList, setCountryList] = useState(null)
  const [filterCountryList, setFilterCountryList] = useState(null)
  const [countryName, setCountryName] = useState(null)
  const [country, setCountry] = useState(null)
  const [capitalWeather, setCapitalWeather] = useState(null)


  const baseURL = `https://studies.cs.helsinki.fi/restcountries/api/`

  useEffect(() => {
    axios
    .get(`${baseURL}all`)
    .then(response => {
      setCountryList(response.data)
      console.log(response.data)
    })
  },[])

  const handleCountryChange = (value) => {
    if(!countryList){
      return null
    }
    setFilterCountryList(countryList.filter(item => item.name.common.toLowerCase().includes(value.toLowerCase())))
  }

 const handleBlur = () => {
    if (filterCountryList !== null) {
      if (filterCountryList.length === 1) {
        setCountryName(filterCountryList[0].name.common);
      } else {
        setCountryName(null); 
      }
    }
  }

  const handleShow = (item) => {
    setCountryName(item)
  }

  useEffect(() => {
    if(countryName !== null){
        axios
      .get(`${baseURL}name/${countryName}`)
      .then(response => setCountry(response.data))
    }
  }, [countryName])

  useEffect(() => {
    if(country !== null){
      axios
    .get(`http://api.openweathermap.org/geo/1.0/direct?q=${country.capital[0]}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      const weather = response.data
      console.log(weather)
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${weather[0].lat}&lon=${weather[0].lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then(response => {
        setCapitalWeather(response.data)
        console.log(response.data)
      })
    })
    }
  }, [country])
 
  return (
    <div className="App">
      <Input handleCountryChange={handleCountryChange} handleBlur={handleBlur}/>
      <ul>
        {filterCountryList ? 
          (filterCountryList.length < 10 ? 
            (filterCountryList.map((item) => {
              return <CountryList key={item.cca3} item={item.name.common}
                        handleShow={() => handleShow(item.name.common)}
                     />
            })) 
            : 
            <p>'Too much results!! Make Query More Specific'</p>)
        : null}
      </ul>
      {country&&capitalWeather !== null ? 
        <CountryDetail name={country.name.common} capital={country.capital} 
          population={country.population} flag={country.flags}
          weather={capitalWeather}
        /> 
      : null}
    </div>
  );
}

export default App;
