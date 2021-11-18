export default function Main({msgState,msg,time}){
    var msgMe = (
        <div className="msg-box">
            <p className="profile-img"></p>
            <div className="msg-txt me">
                <p className="txt">
                    {msg}
                </p>
                <p className="time">{time}</p>
            </div>
        </div>
    )
    var msgYou = (
        <div className="msg-box">
            <div className="msg-txt you">
                <p className="txt">{msg}</p>
                <p className="time">{time}</p>
            </div>
        </div>
    )
    var msgLoading = (
        <div className="msg-box loading">
            <p className="profile-img"></p>
            <div className="msg-txt">
                <div className="txt">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
    if(msgState === "msgMe"){
        return (msgMe)
    }else if(msgState === "msgYou"){
        return msgYou
    }
    else if(msgState === "msgLoading"){
        return msgLoading
    }
}