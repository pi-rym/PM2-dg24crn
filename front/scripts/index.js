let moviesContainer = document.getElementById("movies-background")

$.get("https://students-api.up.railway.app/movies", function(movieData) {


    movieData.forEach(movie => {

        let card = document.createElement("div")
        card.classList.add("movie-card")

        let posterImg = document.createElement("img")
        posterImg.src = movie.poster
        posterImg.alt = movie.title
        card.appendChild(posterImg)

        let titleHeading = document.createElement("h2")
        titleHeading.textContent = movie.title
        card.appendChild(titleHeading)

        let movieDirector = document.createElement('p')
        movieDirector.textContent = `Director: ${movie.director}`
        card.appendChild(movieDirector)

        let movieYear = document.createElement('p')
        movieYear.textContent = `Año: ${movie.year}`
        card.appendChild(movieYear)

        let movieDuration = document.createElement('p')
        movieDuration.textContent = `Duracion: ${movie.duration}`
        card.appendChild(movieDuration)

        let movieGenre = document.createElement('p')
        movieGenre.textContent = `Genero: ${movie.genre.join(', ')}`
        card.appendChild(movieGenre)

        let movieRate = document.createElement('p')
        movieRate.textContent = `Rate: ${movie.rate}`
        card.appendChild(movieRate) 

        moviesContainer.appendChild(card)
    })
    
})