import React from 'react'; 
import {BrowserRouter, HashRouter, Route} from 'react-router-dom'; 
import Home from './routes/Home'; 
import About from './routes/About'; 
import Detail from './routes/Detail';
import Navigation from './components/Navigation'; 
import './components/Movie.css';
// import {About as Potato} from '.routes/About'; then it will be path='/about component={Potato}
//   Rendering two components at the same time Consider / as a route 
//         <Route path="/" component={Home} />
//         <Route path="/about" component={About} /> 
// These work 
// <Route path="/home" component={Home}><h1>Home</h1></Route>
// <Route path="/about" component={About}><h1>About</h1></Route>
function App() {
    return ( 
        <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} /> 
        <Route path="/movie/:id" component={Detail} />
        </HashRouter>
    ); 
}

// HashRouter works better than BrowserRouter with github pages 
export default App;