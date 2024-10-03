const API_KEY = '6d403b2d'

export const searchMovies = async ({ search }) => {

    if (search == '') return null
    try {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

        const movies = await json.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
        }))

    } catch (e) {
        throw new Error('Eroor searching movies')
    }

}
