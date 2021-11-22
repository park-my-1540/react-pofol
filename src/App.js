import Portfolio from "./component/Portfolio";
import MessageContainer from "./container/MessageContainer";
import './scss/common.scss';
import './scss/reset.scss';
import HashRouter  from "./router/HashRouter";
import {Route,Routes,Link} from 'react-router-dom';
import DetailPage from "./component/DetailPage"
function App() {
  return (
    <>
   <Routes>
      <Route path="/" exact={true} element={<Portfolio/>} />
      <Route path="/project/:id" exact={true} element={<DetailPage/>} />
    </Routes>
   </>
  //  <MessageContainer/>
  );
}

export default App;
