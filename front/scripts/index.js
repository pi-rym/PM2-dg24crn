const filmsSection = document.getElementById('films')

tempData.map((movie)=> {
    const movieElement = document.createElement('article')
    const containerMovie = document.createElement('div')

    movieElement.classList.add('movie')
    containerMovie.classList.add('divMovie')

    movieElement.innerHTML = `<img src="${movie.poster}" alt="${movie.title}">`

    containerMovie.innerHTML = `
    <h3>${movie.title}</h3>
    <p><strong>Año:</strong>${movie.year}</p>
    <p><strong>Director:</strong>${movie.director}</p>
    <p><strong>Duracion:</strong>${movie.duration}</p>
    <p><strong>Genero:</strong>${movie.genre}</p>
    <p><strong>Rating:</strong>${movie.rate}</p>
    `

    movieElement.appendChild(containerMovie)
    filmsSection.appendChild(movieElement)

})

tempData.map(renderFilms)