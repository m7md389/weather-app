class TempManager {
    constructor() {
        this.cityData = []
    }

    getDataFromDB() {
        $.ajax({
            method: "GET",
            url: `/cities`,
            success: response => {
                // If any data comes back, set the class' cityData array equal to it
                // Return response
            },
            error: function(xhr, text, err) {

            }
        })
    }

    async getCityData(cityName) {
        $.ajax({
            method: "GET",
            url: `/city/:${cityName}`,
            success: response => {
                // When the data comes back, add an object to the class' cityData array.
                // It should have these properties:

                // City name
                // Temperature
                // Conditions
                // Condition icon
                // Any other data you fancy


            },
            error: function(xhr, text, err) {

            }
        })
    }

    saveCity(cityName) {
        $.ajax({
            method: "POST",
            url: `/city`,
            success: response => {
                // It should find that city's data object from the class' cityData array
                // Then it should pass it as the body of the post request

            },
            error: function(xhr, text, err) {

            }
        })
    }

    removeCity(cityName) {
        $.ajax({
            method: "DELETE",
            url: `/city/${cityName}`,
            success: response => {
                // done

            },
            error: function(xhr, text, err) {

            }
        })
    }

}