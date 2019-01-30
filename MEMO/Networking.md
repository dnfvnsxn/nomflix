# Networking
- The Movie DB API(https://www.themoviedb.org/documentation/api)
- 가입 후 v3key 획득
- api 사용법 : https://developers.themoviedb.org/3/getting-started/introduction
- api.js생성
  - 네트워킹과 api만 다룰 파일
## Axios
```!
npm install Axios
```
- Axios의 인스턴스를 configure 해줄 수 있음 
- 예시: api url이 https://api.themoviedb.org/3/tv/{tv_id}?api_key=194135924c3be3c30a42301aa13a1fba&language=en-US 일때 
```js

import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        api_key: "194135924c3be3c30a42301aa13a1fba",
        language: "en-US"
    }
})

api.get("tv/popular");

export default api;
```

## api.js 
- api Verbs
  - [x] NOew Playing (Movie)
  - [x] Upcoming (Movie)
  - [x] Top Rated (TV)
  - [x] Popular (TV, Movie)
  - [x] Airing Today(TV)
  - [x] TV Show Detail
  - [x] Movie Detail
  - [x] Search (TV, Movie)
```js

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


```