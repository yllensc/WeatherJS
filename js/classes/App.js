import {search,searchBox} from "../selectores.js";
import {getWeather} from "../funciones.js"
class ApiWeather{
    constructor(){
        this.initProgram();
    }

    initProgram(){
       getWeather();
       search.addEventListener("click", () => {
        getWeather();
      });
      
      searchBox.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          getWeather();
        }
      });
    }

}

export default ApiWeather;