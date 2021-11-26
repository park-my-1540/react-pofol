import Portfolio from "./component/Portfolio";
import MessageContainer from "./container/MessageContainer";
import './scss/import.scss'
import {Route,Routes,Link} from 'react-router-dom';
import DetailPage from "./component/DetailPage"
import { Scrollbar } from "smooth-scrollbar-react";
function App() {
  return (
    <>
     <Scrollbar 
        className="sub-container"
        alwaysShowTracks
        plugins={{
            overscroll: {
                effect: "glow"
            } 
            }}
        >
        <Routes>
          <Route path="/" element={<Portfolio/>} />
          <Route path="/project/:id" element={<DetailPage/>} />
        </Routes>

      </Scrollbar>
      {/* <Link to="/">home</Link> */}
      {/* <Link to="/project">ss</Link> */}
   </>
  //  <MessageContainer/>
  );
}

export default App;
