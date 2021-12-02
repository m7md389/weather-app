const renderer = new Renderer()
const tempManager = new TempManager()

const handleSearch = async function() {
    const cityName = $("#search-input").val()
    await tempManager.getCityData(cityName)
    renderer.renderData(tempManager.cityData)
}

const refreshWeather = async function(){
    // console.log(tempManager.cityData)
    // await tempManager.cityData.forEach(async function(city){
    //     await tempManager.removeCity(city.name)
    //     await tempManager.saveCity(city)
    // })
    renderer.renderData(tempManager.cityData)
}


$("#search-icon").on("click", handleSearch)

$("#refresh").on("click", refreshWeather)

$(".cities-container").on("click", ".save", () => {
    const cityName = $(".save").closest(".city-container").dataName
    tempManager.saveCity(cityName)
    renderer.renderData(tempManager.cityData)
})

$(".cities-container").on("click", ".remove", () => {
    const cityName = $(".remove").closest(".city-container").dataName
    tempManager.removeCity(cityName)
    renderer.renderData(tempManager.cityData)
})

$(document).ready(async function(){
    await tempManager.getDataFromDB() 
    refreshWeather()
})

