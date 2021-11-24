import Portfolio from "./component/Portfolio";
import MessageContainer from "./container/MessageContainer";
import './scss/common.scss';
import './scss/reset.scss';
import {Route,Routes,Link} from 'react-router-dom';
import DetailPage from "./component/DetailPage"
function App() {
  return (
    <>
      {/* <Link to="/">home</Link> */}
      {/* <Link to="/project">ss</Link> */}
      <Routes>
        <Route path="/" element={<Portfolio/>} />
        <Route path="/project/:id" element={<DetailPage/>} />
      </Routes>
   </>
  //  <MessageContainer/>
  );
}

export default App;
