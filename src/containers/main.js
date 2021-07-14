import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { Page1 } from '../pages/page1';
// import { Page2 } from '../pages/page2';
// import { Page3 } from '../pages/page3';

const style = {
    fontSize: '120px'
};

const loveStyle = {
    color: '#ff6781',
};

const content = {
    fontSize: '70px',
    color: '#505050'
};

export const Main = () => {
    return (
        <div data-testid='mainBlock'>
            <h2 style={style}>I <span style={loveStyle}>Love</span> You 琳兒</h2>
            <h3 style={content}>寶貝辛苦了~ 我永遠都在喔!!</h3>
            <h3 style={content}>我會盡快過去陪你的</h3>
        </div>
    );
};


// export const Main = () => {
//     return (
//         <div data-testid='mainBlock'>
//             <h2>Starter Demo Page is working!</h2>
//             <h2>Super update test</h2>
//             <h2>Super update test 2</h2>
//             <h2>Super update test 3</h2>
//             <h2>Super update test 4</h2>
//             <h2>Super update test 5</h2>
//             <Router>
//                 <div>
//                     <nav>
//                         <ul>
//                             <li>
//                                 <Link to={'/page1'}>Page1</Link>
//                             </li>
//                             <li>
//                                 <Link to={'/page2'}>Page2</Link>
//                             </li>
//                             <li>
//                                 <Link to={'/page3'}>Page3</Link>
//                             </li>
//                         </ul>
//                     </nav>
//                     <Switch>
//                         <Route path={'/page1'}>
//                             <Page1 />
//                         </Route>
//                         <Route path={'/page2'}>
//                             <Page2 />
//                         </Route>
//                         <Route path={'/page3'}>
//                             <Page3 />
//                         </Route>
//                     </Switch>
//                 </div>
//             </Router>
//         </div>
//     );
// };
