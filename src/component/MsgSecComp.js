import React,{useEffect,useState,useRef,useCallback,useMemo} from "react"
import MsgComp from "./MsgComp";

export default function Main({msgList,onLoading,onAddAsync,onUpdated}){
    useEffect(()=>{
        chatStart();
    },[]);

    const [inputs,setInputs] = useState();
    const nextId = useRef(2);
    const fadeChat = ['반갑습니다.','열심히 하겠습니다.','즐거운 하루 보내세요~~','잘 부탁드립니다 ^^'];
    const rand_1_fatChat = Math.floor(Math.random() * (fadeChat.length-1)) + 1

    useEffect(()=>{
        /**
         * msgList 가 변경 되는 시점에 마지막 메시지가 입력 메시지면
         * 답장 메시지 출력
         * msg-box가 스크롤을 넘어가면 마지막 메시지에 보이게 스크롤 이동
         */
        if(msgList.length && msgList[msgList.length-1].target === "msgYou"){
            setTimeout(()=>{
                onLoading(nextId.current);
                onAddAsync(nextId.current++,"msgMe", fadeChat[rand_1_fatChat],currentTime);
            },2000)
        }
        const objDiv = document.getElementById("content");
        
        if(msgList.length && objDiv.offsetHeight>400){ //스크롤 마지막 메시지로 이동
            objDiv.scrollTop = objDiv.scrollHeight;
        }
    },[msgList])
    
     /**
     * currentTime : 현재시간
     */
      let date = new Date(); 
      let currentTime = useMemo(() => {
        let today = new Date(),
        hours = ('0' + today.getHours()).slice(-2),
        minutes = ('0' + today.getMinutes()).slice(-2),
        string = `${hours}:${minutes}`;
        return string;
      }, [date.getMinutes()]) // 분이 바뀔때만 

    /**
     * chartStart : 초기 메시지 노출
     * loading후 메시지 노출되게
     */
     const chatStart = useCallback(
        () => {
            onLoading(0);
            onAddAsync(0,"msgMe", "안녕하세요",currentTime);
            setTimeout(()=>{
                onLoading(1);
                onAddAsync(1,"msgMe", "안녕하세요222",currentTime);
            },2000)
        },
    []
    );
    /**
     * sendMsg : 입력 메시지 노출
     */

    const sendMsg = useCallback(
        () => {
            onUpdated(nextId.current++,"msgYou", inputs,currentTime);
            setInputs('');
        },
    [inputs]
    );
    return (
        <>
         <section className="main">
            <div className="inner">
                <div className="chat-box">
                    <div className="chat-header">
                        <p className="profile-img"></p>
                        <div className="cont">
                            <p className="txt">PARKMEEYOUNG</p>
                            <p className="time">KOREA</p>
                        </div>
                    </div>
                    <div className="content" id="content">
                        { msgList && msgList.map((msg)=><MsgComp msgState={msg.target} msg={msg.text} time={msg.time}/>)}
                    </div>
                    <div className="send-box">
                        <input type="text" placeholder="Type message..." value={inputs} className="txt-input" onChange={useCallback((e)=>{setInputs(e.target.value)},[inputs])} onKeyDown={useCallback((e)=>{if(e.keyCode === 13){sendMsg()}},[inputs])}></input>
                        <button type="button" className="btn-send" onClick={sendMsg}>SEND</button>
                    </div>
                </div>
            </div>
            <div className="mouse-wrap">
                <div className="mouse"><span></span></div>
                <span className="txt">scroll</span>
            </div>        
         </section>
        </>
    )
}