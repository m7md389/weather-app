class TempManager {
    constructor() {
        this.cityData = []
    }

    async getDataFromDB() {
        await $.ajax({
            method: "GET",
            url: `/cities`,
            success: response => {
                this.cityData = []
                for(let city of response){
                    city.saved = true
                    this.cityData.push(city)
                }
            },
            error: (xhr, text, err) => {
                alert(text)
            }
        })
    }

    async getCityData(cityName) {
        await $.ajax({
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

    async saveCity(cityName) {
        let city

        this.cityData.forEach(c=> {
            if(c.name === cityName){
                return city = c
            }
        })

        await $.ajax({
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

    async removeCity(cityName) {
        await $.ajax({
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