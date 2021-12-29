import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {update_msg,change_msgAsync,loading} from "../module/messages";
import MsgSecComp from "../component/MsgSecComp";
import '../scss/chat.scss'
/*
    MessageContainer : module > message 의 컨테이너 컴포넌트
*/

function MessageContainer(){
    /*
        msgList : 현재 msg list
     */
    const msgList = useSelector(state => state.messages);
    const dispatch = useDispatch();

    /*
        onLoading : 해당 msg 로딩 상태로 update
        onUpdated : 상대방 입력한 msg  update
        onAddAsync : msgList에 답장 msg 추가 
    */
    const onLoading = (id) => dispatch(loading(id));
    const onUpdated = (id,text,target,time) => dispatch(update_msg(id,text,target,time)); 
    const onAddAsync =(id,text,target,time) => dispatch(change_msgAsync(id,text,target,time));
        
    return <MsgSecComp msgList={msgList} onUpdated={onUpdated} onLoading={onLoading} onAddAsync={onAddAsync}/>;
}

export default React.memo(MessageContainer);