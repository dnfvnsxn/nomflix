# Setting Up the Project
- create-react-app을 이용
- npx를 활용한 create-react-app 설치
```!
npx create-react-app <저장폴더명>
npx create-react-app nomflix
```
- 불필요한 파일 삭제
    - App.js
    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';

    ReactDOM.render(<App />, document.getElementById('root'));
    ```
    - index.js
    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';

    ReactDOM.render(<App />, document.getElementById('root'));
    ```
- .env 파일생성
- 기본적으로 src 파일을 보게 만들어줌
```.env
NODE_PATH=src
```
- prop-types 설치
```
yarn add prop-types
```
- 실행
```!
yarn start
```
- src 폴더안에 components와 Routes 폴더 생성
- react-router-dom 설치
  - react-router: route와 관련된 유일한 react 패키지
```!
yarn add react-router-dom
```
- composition: 두 개 이상의 Route를 랜더링하는 방식
- exact가 없어 /tv로 시작하는 모든 것에 렌더링
```js
export default () =>(
    <Router>
        <>
            <Route path="/" exact component={Home} />
            <Route path="/tv" component={TV} />
            <Route path="/tv/popular" render={() => <h1>popular</h1>} />
            <Route path="/search" component={Search} />
        </>
    </Router>
);
```
- <Redirect from="*" to="/" /> : 렌더링되지 않은 모든 페이지를 home으로 렌더링
- 오직 하나의 Route만 렌더링
```js
<Switch>
    <Route path="/" exact component={Home} />
    <Route path="/tv" exact component={TV} />
    <Route path="/search" component={Search} />
    <Redirect from="*" to="/" />
</Switch>
```