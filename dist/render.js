class Renderer {
    constructor() {
        const citiesEl = $('.cities-container')
        const HandlebarsSource = $("#city-template").html()
        const template = Handlebars.compile(HandlebarsSource)
    }

    renderData(citiesData) {
        citiesEl.empty()
        const newHTML = template({ city: citiesData })
        citiesEl.append(newHTML)    
    }
}