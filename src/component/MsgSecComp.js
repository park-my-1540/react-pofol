import React,{useEffect,useState,useRef} from "react"
import MsgComp from "./MsgComp";

export default function Main({msgList,onLoading,onAddAsync,onUpdated}){
    useEffect(()=>{
        chatStart();
    },[]);

    const [inputs,setInputs] = useState();
    const nextId = useRef(2);
    const fadeChat = ['집에가고 싶어요','오늘은 수능','월급좀 많이주세요','퇴근하고 싶어요'];
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
                onAddAsync(nextId.current++,"msgMe", fadeChat[rand_1_fatChat],timeFuction());
            },2000)
        }
        const objDiv = document.getElementById("content");
        
        if(msgList.length && objDiv.offsetHeight>400){ //스크롤 마지막 메시지로 이동
            objDiv.scrollTop = objDiv.scrollHeight;
        }
    },[msgList])
    
     /**
     * timeFuction : 메세지 보내는 시간 세팅 함수
     */
    const timeFuction = function(callback){
        let today = new Date(),
            hours = ('0' + today.getHours()).slice(-2),
            minutes = ('0' + today.getMinutes()).slice(-2),
            string = `${hours}:${minutes}`;
        return string;
    }
    /**
     * chartStart : 초기 메시지 노출
     * loading후 메시지 노출되게
     */
    function chatStart(){
        onLoading(0);
        onAddAsync(0,"msgMe", "안녕하세요",timeFuction());
        setTimeout(()=>{
            onLoading(1);
            onAddAsync(1,"msgMe", "안녕하세요222",timeFuction());
        },2000)
    }
    /**
     * sendMsg : 입력 메시지 노출
     */
    function sendMsg(){
        onUpdated(nextId.current++,"msgYou", inputs,timeFuction());
        setInputs('');
    }

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
                        <input type="text" placeholder="Type message..." value={inputs} className="txt-input" onChange={(e)=>{setInputs(e.target.value)}} onKeyDown={(e)=>{if(e.keyCode === 13){sendMsg()}}}></input>
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