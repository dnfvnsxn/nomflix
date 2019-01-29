# Styles
- 개별 텀포넌트별로 폴더를 만들어 컴포넌트와 CSSl 분리를 막아줌
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
- 최고의 해결방법: style components
```!
yarn add styled-components
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
