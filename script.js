// let locationSearch = document.getElementById("search_location");
// let locationSearchBtn = document.querySelector("#search_btn");
// let city = document.querySelector("#city");
// let cityDetails = document.querySelector("#cityDetails");
// let temp = document.querySelector("#temp");
// let feel = document.querySelector("#peopleMood");
// let img = document.querySelector("#img");

// const Search = () => {
//   let urlBody =
//     "https://api.weatherapi.com/v1/current.json?key=%20a19659f5c65f4b8ba2593628232108&q=";
//   let url = urlBody + locationSearch.value;
//   fetch(url)
//     .then((respons) => respons.json())
//     .then((data) => {
//       city.innerHTML = data.location.name +" ,"+ data.location.country;
//       cityDetails.innerHTML = data.location.region + " Date : " + data.location.localtime;
//       temp.innerHTML = data.current.temp_c + " `C";
//       feel.innerHTML = data.current.condition.text;
//       img.src = data.current.condition.icon;
//     })
//     .catch((err) => console.log(err));
// };


// locationSearchBtn.addEventListener("click", Search())

// window.addEventListener("keypress", (event) =>{
//   if(event.key == 'Enter'){
//     Search()
//   }
// })



let Wlocation = document.querySelector("#search_location");

let DOMinsert = (id, data) => {
  document.querySelector(`#${id}`).innerText = data;
}

const search = (Location = "London") => {
  let url = "https://api.weatherapi.com/v1/current.json?key=%20a19659f5c65f4b8ba2593628232108&q=" + Location;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // document.querySelector("#date_time").innerText = data.location.localtime;
      DOMinsert("cityName", data.location.name);
      DOMinsert("contryName", data.location.country);
      DOMinsert("temp" ,data.current.temp_c);
      DOMinsert("date_time", data.location.localtime)
      DOMinsert("speed", data.current.wind_mph+" mph")
      DOMinsert("speedDir", data.current.wind_dir+" mph")
      DOMinsert("pressure", data.current.pressure_in+" in")
      DOMinsert("humidity", data.current.humidity)
      DOMinsert("feeling", data.current.feelslike_c+"°C")
      DOMinsert("cloud", data.current.cloud)
      DOMinsert("uv", data.current.uv)
    })
    .catch((err) => console.log(err));

    
};
search()
document.querySelector("#search_btn").addEventListener("click", function(){
  console.log(Wlocation.value)
  search(Wlocation.value);
}); //search button

window.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    search(Wlocation.value);
  }
});
