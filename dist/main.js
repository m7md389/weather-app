const renderer = new Renderer()
const TempManager = new TempManager()

refreshWeather()

const handleSearch = async function() {
    const cityName = $("#search-input").val()
    await TempManager.getCityData(cityName)
    renderer.renderData(TempManager.getDataFromDB())
}

$("#search-icon").on("click", handleSearch)

$("#refresh").on("click", refreshWeather)

$(".cities-container").on("click", ".save", () => {
    const cityName = $(".save").closest(".city-container").dataName
    TempManager.saveCity(cityName)
    renderer.renderData(TempManager.getDataFromDB())
})


$(".cities-container").on("click", ".remove", () => {
    const cityName = $(".remove").closest(".city-container").dataName
    TempManager.removeCity(cityName)
    renderer.renderData(TempManager.getDataFromDB())
})


const refreshWeather = function(){
    const cities = TempManager.getDataFromDB()
    cities.forEach(city => {
        TempManager.removeCity(city)
        TempManager.saveCity(city)
    })
    renderer.renderData(TempManager.getDataFromDB())
}










//