import { useEffect } from "react"

export default function SearchPage ({ routeParams }) {

    useEffect(() => {
        document.title = `Has buscado ${routeParams.query}`

    //     fetch(`https://api.aajsfahsasd.com/search/${routeParams.query}`)
    }, [])

    return (
        <h1>Has buscado: {routeParams.query}</h1> 
    )
}