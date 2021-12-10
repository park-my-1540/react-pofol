export default function Aside(){
  
    return(
        <div className="aside">
            <div className="aside-top">
              <h1>PARK MY's Portfolio</h1>
            </div>
            <div className="main-ctrl">
              <button className="main-prev"><span className="blind">이전으로</span><svg width="15" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9.21373 11L18 1" stroke="#1A1B1C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
              <div class="main-pagination"></div>
              <button className="main-next"><span className="blind">다음으로</span><svg width="15" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9.21373 11L18 1" stroke="#1A1B1C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
            </div>
          </div>
    );
}