/*
    ui 
    MAIN_IDX_UPDATE : 현재 활성화된 메인 스와이퍼 인덱스
    POFOL_IDX_UPDATE : 현재 활성화된 practice 스와이퍼 인덱스 - 페이지 이동 후 복귀했을때 활성화 된 인덱스로 돌아가기 위해
    DEVICE_UPDATE : 현재 윈도우 사이즈 768 기준 mo/pc 상태
*/

const MAIN_IDX_UPDATE= 'ui/mainupdate';
const POFOL_IDX_UPDATE= 'ui/pofolupdate';
const DEVICE_UPDATE= 'ui/deviceupdate';

const initialState = {
    mainActIdx : 0,
    pofolActIdx : 0,
    device:'',
}
export const mainUpdate = (idx) => ({type:MAIN_IDX_UPDATE,idx})
export const pofolUpdate = (idx) => ({type:POFOL_IDX_UPDATE,idx})
export const deviceUpdate = (deviceFlag) => ({type:DEVICE_UPDATE,deviceFlag})

export default function ui(state=initialState,action){
    switch(action.type){
        case MAIN_IDX_UPDATE : {
            return {
                ...state,
                mainActIdx : action.idx
            }
        }
        case POFOL_IDX_UPDATE : {
            return {
                ...state,
                pofolActIdx : action.idx
            }
        }
        case DEVICE_UPDATE : {
            return {
                ...state,
                device : action.deviceFlag
            }
        }
        default : return state;
    }
}