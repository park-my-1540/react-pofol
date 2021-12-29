# Parkmy's Portfolio
- 반응형 리액트 포트폴리오
- url :  http://park-my-1540.github.io/react-pofol

## 화면구조
1. HOME : 메인
2. About : 자기소개, 스킬 
3. Portfolio : 프로젝트 포트폴리오
4. Practice : 리액트 공부하며 만들어본 예제


## 폴더구조
`component` : 컴포넌트 파일\
`module` : 리덕스 모듈 \
`container` : 컨테이너 컴포넌트 \
`lib` : 공통 함수\
`pages` : 라우터 되는 페이지\
`data` : data\
`scss` 

## 사용한 라이브러리
- gh-pages
- gsap
- react-redux
- react-router-dom
- react-transition-group
- react-smooth-scrollbar
- smooth-scrollbar
- react-swiper
- swiper
- redux
- redux-logger
- redux-thunk
- tag-canvas
- sass
- scss

## 채팅 프로세스
1. PC -> Main 에서 호출 / MO -> MoMain 에서 호출
2. MessageContainer에서 store에서 msgList 가져다 MesSecComp 컴포넌트에 전달
3. MessageContainer에서 액션생성 함수 MesSecComp 컴포넌트에 전달
    + `onLoading` : 해당 msg 로딩 상태로 update
    + `onUpdated` : 상대방이 입력한 msg 메시지 update
    + `onAddAsync` : msgList에 답장 msg 추가 
\\\\
4. MesSecComp에서 chatStart 호출  - [chatStart] : 인사말 먼저 출력
   <pre><code>
     const chatStart = useCallback(
        () => {
            onLoading(0); //로딩 상태
            onAddAsync(0,"msgMe", "안녕하세요",currentTime); // 메시지 추가
            setTimeout(()=>{
                onLoading(1);
                onAddAsync(1,"msgMe", "박미영입니다.",currentTime);
            },2000)
        },
    []
    );
    </code></pre>   
\\
5. 메시지 입력후 send 클릭시 sendMsg 호출 - [sendMsg] : 입력한 메시지 채팅창에 츨력 (store에 msgList 추가됨)
    <pre><code>
       const sendMsg = useCallback(
        () => {
            onUpdated(nextId.current++,"msgYou", inputs,currentTime); //입력한 메시지 msgList 추가
            setInputs('');
        },
    [inputs]
    );
    </code></pre> 
\\
6. msgList state 변경 될때 마다 답장 출력됨 : [onAddAsync] : 답장 메시지 출력
    <pre><code>
     useEffect(()=>{
      ...
            setTimeout(()=>{
                onLoading(nextId.current);
                onAddAsync(nextId.current++,"msgMe", fakeChat[rand_1_fatChat],currentTime);
            },2000)
        }
        ...
    },[msgList])
</code></pre> 