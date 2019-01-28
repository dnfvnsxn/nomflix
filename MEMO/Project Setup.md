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
```!
yarn add react-router-dom
```