
import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        api_key: "194135924c3be3c30a42301aa13a1fba",
        language: "en-US"
    }
})


export const movieApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id => 
        api.get(`movie/${id}`,{
            param:{
                append_to_response: "videos"
            }
        }),
    search: term => 
        api.get("search/movie",{
            params:{
                query: encodeURIComponent(term) //url 인코딩
            }
        })
}

export const TVApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: id => 
        api.get(`tv/${id}`,{
            param:{
                append_to_response: "videos"
            }
        }),
    search: term => 
        api.get("search/tv",{
            params:{
                query: encodeURIComponent(term) //url 인코딩
            }
        })
}


export default api;

