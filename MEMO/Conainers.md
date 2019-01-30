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