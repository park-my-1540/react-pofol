import React, { useEffect, useRef } from "react";
import { Scrollbar } from "smooth-scrollbar-react";

import "../scss/detail.scss";

const App = () => {

  return (
    <div className="App">
      <h1>SMOOTH-SCROLLBAR-REACT</h1>
      <Scrollbar
        className="custom-class"
        onScroll={console.log}
        alwaysShowTracks
        plugins={{
          overscroll: {
            effect: "glow"
          } 
        }}
      >
        <div className="sample-container-2" style={{ maxHeight: '100vh' }}>
          {[...Array(40).keys()].map((value, index) => (
            <div key={index}>{value + index}</div>
          ))}
        </div>
      </Scrollbar>
    </div>
  );
};

export default App;
