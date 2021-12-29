const UPDATE = 'message/update'; //현재 상태 변경  -> 
const CHANGE_MSG = 'message/change_msg'; // loading 중인 상태를 변경하고 text 받아서 노출시킴

export const loading = (id) => ({ //로딩중
    type:UPDATE,
    msgs:{
        id ,
        target:"msgLoading",
        text:'',
    }
})
export const update_msg = (id,target,text,time) => ({ // 새로운 메시지 노출 시킴
    type:UPDATE,
    msgs:{
        id , 
        target,
        text,
        time
    }
})
export const change_msg = (id,target,text,time) => ({ // loading 중인 상태를 변경하고 text 받아서 노출시킴
    type: CHANGE_MSG,
    msgs: {
      id ,
      target,
      text,
      time 
    }
  });


/* 비동기 액션생성 함수 */
export const change_msgAsync  = (id,target,text,time) => dispatch => {
    setTimeout(() => dispatch(change_msg(id,target,text,time)), 2000);
}
/* //비동기 액션생성 함수 */

const initalState = [];

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
        default : 
            return state;
    }
}