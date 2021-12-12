const MAIN_IDX_UPDATE= 'ui/mainupdate';
const POFOL_IDX_UPDATE= 'ui/pofolupdate';
const DEVICE_UPDATE= 'ui/deviceupdate';

const initialState = {
    mainActIdx : 0,
    pofolActIdx : 0,
    device:null,
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