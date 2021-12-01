const renderer = new Renderer()
const TempManager = new TempManager()

renderer.renderData(TempManager.getDataFromD())

const handleSearch = function() {
    // A handleSearch function, which should call to the server and render new weather data

    // It should take the city-input from your html
    // It should call the getCityData method from an instance of your TempManager, and send the city-input as the parameter
    // It should then render the data you get back from the server
    // This function needs to be async to work

}

$("#search-icon").on("click", handleSearch)



// An on click for each of the save buttons that:
$(".cities-container").on("click", ".save", () => {
    const cityName = $(".save").closest(".city-container").dataName
    TempManager.saveCity(cityName)
    renderer.renderData(TempManager.getDataFromD())
})


// An on click for each of the remove buttons that:
$(".cities-container").on("click", ".remove", () => {
    const cityName = $(".remove").closest(".city-container").dataName
    TempManager.removeCity(cityName)
    renderer.renderData(TempManager.getDataFromD())
})
    // Takes the name of the city from the DOM
    // Calls the removeCity method from an instance of the TempManager, sending the cityName as a parameter




// So far, our app is static
// I cannot refresh the weather unless I remove it
// and add it back again. That's just poor functionality, so lets fix it












//