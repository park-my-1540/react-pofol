import Main from "./component/Main";
import './scss/import.scss'
import {Route,Routes} from 'react-router-dom';
import DetailPage from "./component/DetailPage"
import AnimatedCursor from "./component/AnimatedCursor";
function App() {
  return (
    <>
      {/* <AnimatedCursor/> */}
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/project/:id" element={<DetailPage/>} />
      </Routes>
   </>
  );
}

export default App;
