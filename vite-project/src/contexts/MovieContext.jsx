import { createContext ,useContext ,useEffect,useState } from "react";

 
const MovieContext = createContext()

export const useMovieContext = ()=> useContext(MovieContext)

export const MovieProvider =({children})=>{

    const [favourite ,setfavourite] =useState([])


    useEffect(()=>{
        const storedFavs = localStorage.getItem("favourite")

        if(storedFavs) setfavourite(JSON.parse(storedFavs))
    },[])

    useEffect(()=>{
        localStorage.setItem("favourite" ,JSON.stringify(favourite))
    },[favourite])

    const addToFavourite=(movie)=>{
        setfavourite(prev=>[...prev,movie])
    }

    const removeFromFavourite =(movieId)=>{

        setfavourite(prev => prev.filter(movie=>movie.id!== movieId ))
    }

    const isFavourite =(movieId)=>{

        return favourite.some(movie =>movie.id===movieId)
    }


    const value ={
        isFavourite,
        addToFavourite,
        removeFromFavourite,
        favourite
    }

    return <MovieContext.Provider value={value}>
         {children }
    </MovieContext.Provider>

}

