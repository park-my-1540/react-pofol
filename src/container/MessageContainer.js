import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {update_msg,change_msgAsync,loading,set_timeAsync} from "../module/messages";
import Main from "../component/MsgSecComp";
import MainTypo from "../component/MainTypeComp";
function MessageContainer(){

    const msgList = useSelector(state => state.messages);
    const dispatch = useDispatch();

    const onLoading = (id) => dispatch(loading(id));
    const onUpdated = (id,text,target,time) => dispatch(update_msg(id,text,target,time)); 
    const onAddAsync =(id,text,target,time) => dispatch(change_msgAsync(id,text,target,time));
    const onsetTimeAsync = (id) => dispatch(set_timeAsync(id));
        
    return (
        <>
            <Main msgList={msgList} onUpdated={onUpdated} onLoading={onLoading} onsetTimeAsync={onsetTimeAsync} onAddAsync={onAddAsync}/>
            <MainTypo/>
        </>
        );
}

export default MessageContainer;