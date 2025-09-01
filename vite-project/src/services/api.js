// you can get your own api key from rapidapi.com
// and this api is free to use with limited requests per day
// only for learning purposes exposing api key like this is not a good idea for production apps

export const getPopularMovies = async () =>{

const url = 'https://imdb236.p.rapidapi.com/api/imdb/most-popular-movies';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '86569629a7msh3968833d3d2dec3p1c604ejsn3e217b40da14',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	}
};

    try {
        const response = await fetch(url, options);
        const data= await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
 
}


export const searchMovies = async (query) =>{

const url = `https://imdb-movies-web-series-etc-search.p.rapidapi.com/${query}.json`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '86569629a7msh3968833d3d2dec3p1c604ejsn3e217b40da14',
		'x-rapidapi-host': 'imdb-movies-web-series-etc-search.p.rapidapi.com'
	}
};

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        
        const requiredData=[]
        data['d'].forEach(element => {
            const movie_data={
                "id":element.id,
                "originalTitle":element.l,
                "releaseDate":element.y,
                "primaryImage":element.i.imageUrl
            }
            
            requiredData.push(movie_data)
        });
        console.log(requiredData);
        
        return requiredData;

    } catch (error) {
        console.error(error);
    }
}
