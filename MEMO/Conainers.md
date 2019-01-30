# Containers
## 리엑트 컴포넌트 코딩 패턴
- container presenter pattern
  - container
    - data를 가짐
    - state를 가짐
    - api를 불러옴
    - 모든 로직을 처리
  - presenter
    - no class, no api. no state
    - 함수형 컴포넌트 
    - 스타일
## Home Container 기본형
- src/home 생성 후 3개의 파일 생성
- HomeContainer.js
```js
import React from "react";
import HomePresenter from "./HomePresenter"

export default class extends React.Component{
    // state들을 결정 
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    }

    componentDidMount(){

    }



    // 이곳에 로직을 추가 


    // HomePresenter로 갑로 가는 모든 state 값을 렌더링 
    render(){
        const { nowPlaying, upcoming, popular, error, loading} = this.state;
        return(
            <HomePresenter
                nowPlaying = {nowPlaying}
                upcoming = {upcoming}
                popular = {popular}
                error = {error}
                loading = {loading}
            />
        );
    }
}
```
- HomePresenter.js
```js
export default () => "Home";
```
- index.js
```js
import homeContainer from "./HomeContainer"

export default homeContainer

```

- component Lifecycle
  - Render 
    1. componentWillMount()
    2. render()
    3. componentDidMount()
  - Update 
    1. componentWillReceiveProps() 
    2. shouldComponentUpdate() 
    3. componentWillUpdate() 
    4. render() 
    5. componentDidUpdate()

- Home Container 작동방식
  - 컴포넌트가 마운트 되면 nowPlaying, upcoming, popular를 찾음 
  - 끝나고 나면 state 값을 설정
  - 에러가 있으면 loading을 false로 변경
- 로직 구성의 2가지 옵션
  - componentDidMount() 안에서 전체 API 요청
    ```js
     async componentDidMount(){
    try{            
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();
      
      const {
        data: { results: upcoming } 
      } = await moviesApi.upcoming;

      const {
        data: { results: popular } 
      } = await moviesApi.popular;

      this.setState({
        nowPlaying,
        upcoming,
        popular,
      })

    } catch{        // 작동하지 않으면 crror를 catch
      this.setState({
        error: "Cant't find movie information."
      });
    } finally{       // 성공,실패 여부와 상관없 이 마지막에는 무엇인가를 실행 
      this.setState({
        loading: false
      });
    }
  }
    ````
  - 각각의 요청을 분리된 함수로 만들어서 따로 요청
