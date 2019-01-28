# NPX
- npm 패키지 바이너리를 실행하는 패키지 
- 예시: creat-react-app사용
    - 일반적인 사용
    ```!
    yarn global add create-react-app
    ```
    - 자주 사용하믐 모듈을 아니지만 글로벌하게 설치
    - 용량을 차지하며 업데이트를 직접 해주어야 한다는 문제 발생
- NPX는 npm 패키지들을 컴퓨터 저장없이 사용할 수 있게 해줌
- yarn과 npx 설치
```!
npm install --global yarn
npm update
yarn global add npx
```
- npx를 활용한 create-react-app 설치
```!
npm create-react-app <저장폴더명>
```
- create-react-app을 실행하고 끝나면 컴퓨터에서 삭제

