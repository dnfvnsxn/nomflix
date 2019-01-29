# Styles
- 개별 컴포넌트별로 폴더를 만들어 컴포넌트와 CSS 분리를 막아줌
  - Header 폴더 생성후 폴더안으로 Header.js을 옮긴 후 Header.css와 index.js 생성
- 개별 컴퍼넌트에서만 작동하는 CSS가 최고의 방법
  - 문제1: 파일을 생성해야함
  - 문제2: className을 기억해야함
  - 문제3: className이 반복되지 않도록 기억해야함
- 문제3 해결방법
  - className을 임의화하여 css가 global이 아닌 local이 되게 함
  - css를 모듈로 바꿈
  - Header.css를 Header.module.css로 이름변경
  - 클래스 이름이 임의로 생성
  - 작은 프로젝트에 효과적인 방법
    - Header.module.css
    ```css
    .navList{
        display: flex;
    }
    ```
    - Header.js
    ```js
    import React from "react";
    import styles from "./Header.module.css";

    export default () => (
        <header className = "nav">
            <ul className={styles.navList}>
                <li>
                    <a href="/">Movies</a>
                </li>
                <li>
                    <a href="/tv">TV</a>
                </li>
                <li>
                    <a href="/search">Search</a>
                </li>
            </ul>
        </header>
    );
    ```
## 가장 좋은 해결방법: style components
```!
npm install styled-components
```
- Header.js
```js
import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components'

const Header = styled.header``;

const List = styled.ul`
    display: flex;
    &:hover{
        background-color: blue;
    }
`;

const Item = styled.li``;

const SLink = styled(Link)``;

export default () => (
    <Header>
        <List>
            <Item>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
);
```

## Global 스타일 설정
- styled-reset: styled-components를 이용해서 css를 초기화
```!
npm install styled-reset
```
- GlobalStyles.js
```js
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        background-color: rgba(20,20,20,1);
    }
`;

export default globalStyles;
```
- App.js
```js
import React, { Component } from 'react';
import Router from "components/Router";
import GlobalStyles from "components/GlobalStyles"
class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
```
## Header
- Header.js
```js
import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components'

const Header = styled.header`
    color: white;
    position: fixed; /* 스크롤해도 위치 유지 */
    top:0;
    left: 0;
    width: 100%;
    height: 50px;
    display:flex;
    align-items: center;
    padding: 0px 10px;
    background-color: rgba(20, 20, 20, 0.8);
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 50px;
    height: 50px;
    text-align:center;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default () => (
    <Header>
        <List>
            <Item>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
);
```
## Location Aware Header
- props
- winRouter: 다른 컴포넌트를 감싸는 컴포넌트
- 위 두개를 활용하여 border-bottom 생성
```js
import React from "react";
import {Link, withRouter} from "react-router-dom";
import styled from 'styled-components'

const Header = styled.header`
    color: white;
    position: fixed; /* 스크롤해도 위치 유지 */
    top:0;
    left: 0;
    width: 100%;
    height: 50px;
    display:flex;
    align-items: center;
    padding: 0px 10px;
    background-color: rgba(20, 20, 20, 0.8);
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width:80px;
    height: 50px;
    text-align:center;
    border-bottom: 3px solid ${props => props.current ? "#3498db" : "transparent"};
    transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default withRouter(({location:{pathname}}) => (    /*Spread Operator*/
    <Header>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
));
```