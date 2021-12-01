class TempManager {
    constructor() {
        this.cityData = []
    }

    getDataFromDB() {
        $.ajax({
            method: "GET",
            url: `/cities`,
            success: response => {
                response.forEach(city => city.saved = true)
                this.cityData = response
            },
            error: (xhr, text, err) => {
                alert(text)
            }
        })
    }

    async getCityData(cityName) {
        $.ajax({
            method: "GET",
            url: `/city/:${cityName}`,
            success: response => {
                response.saved = false
                this.cityData.push(response)
            },
            error: (xhr, text, err) => {
                alert(text)
            }
        })
    }

    saveCity(cityName) {
        let city

        this.cityData.forEach(c=> {
            if(c.name === cityName){
                city = c
                break
            }
        })

        $.ajax({
            method: "POST",
            url: `/city`,
            data: city,
            success: response => {
                return true
            },
            error: (xhr, text, err) => {
                alert(text)
            }
        })
    }

    removeCity(cityName) {
        $.ajax({
            method: "DELETE",
            url: `/city/${cityName}`,
            success: response => {
                return true
            },
            error: (xhr, text, err) => {
                alert(text)
            }
        })
    }
}