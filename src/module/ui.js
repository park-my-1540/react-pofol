const UPDATE = 'ui/update'; //현재 상태 변경  -> 
const CHANGE_MSG = 'ui/change_msg'; // loading 중인 상태를 변경하고 text 받아서 노출시킴
const SET_TIME = 'ui/set_time'; // 시간 세팅

export const updateUI = (id,time) => ({type:SET_TIME,time,id})

/* 비동기 액션생성 함수 */
export const change_msgAsync  = (id,target,text,time) => dispatch => {
    setTimeout(() => dispatch(change_msg(id,target,text,time)), 2000);
}
export const set_timeAsync = (id) => dispatch => {
    let today = new Date(),
        hours = ('0' + today.getHours()).slice(-2),
        minutes = ('0' + today.getMinutes()).slice(-2),
        string = `${hours}:${minutes}`;
        
    dispatch(set_time(id,string));
}
/* //비동기 액션생성 함수 */


const initalState = {
    
};

export default function message(state= initalState,action){
    switch(action.type){
        case UPDATE : 
            return state.concat(action.msgs);
        case CHANGE_MSG : 
            return state.map( 
                msgs =>
                ( 
                    msgs.id === action.msgs.id) 
                    ? {
                        ...msgs,
                        target:action.msgs.target,
                        text:action.msgs.text,
                        time:action.msgs.time,
                    }
                    : msgs
                );
        case SET_TIME : 
            return state.map(
                msgs =>
                    msgs.id === action.id ? {...msgs, time:action.time} :{...msgs, time:action.time}
            );
        default : 
            return state;
    }
}