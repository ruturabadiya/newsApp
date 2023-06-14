import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

function  App () {
 const pageSize = 5;
 const apiKey = process.env.REACT_APP_NEWS_API;

 const[progress,setProgress] = useState(0);

    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar color="yellow" progress={progress} height={3} />
          <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category='general' />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country='in' category='business' />} />
            <Route exact path="/entertaient" element={<News setProgress={setProgress} apiKey={apiKey} key="entertaient" pageSize={pageSize} country='in' category='entertainment' />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category='general' />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country='in' category='health' />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country='in' category='science' />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country='in' category='sports' />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country='in' category='technology' />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}
export default App;

// import './App.css';
// import React, { useState } from 'react';
// import Navbar from './Componants/Navbar';
// import News from './Componants/News';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LoadingBar from 'react-top-loading-bar';

// function App ()  {
//   pageSize = 5;
//   apiKey = process.env.REACT_APP_NEWS_API;

//   state = {
//     progress: 0
//   };

//   setProgress = (progress) => {
//     this.setState({ progress: progress });
//   };

//     return (
//       <div>
//         <BrowserRouter>
//           <Navbar />
//           <LoadingBar color="yellow" progress={state.progress} height={3} />
//           <Routes>
//           <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category='general' />} />
//             <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country='in' category='business' />} />
//             <Route exact path="/entertaient" element={<News setProgress={setProgress} apiKey={apiKey} key="entertaient" pageSize={pageSize} country='in' category='entertainment' />} />
//             <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category='general' />} />
//             <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country='in' category='health' />} />
//             <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country='in' category='science' />} />
//             <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country='in' category='sports' />} />
//             <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country='in' category='technology' />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     );
// }
// export default App;