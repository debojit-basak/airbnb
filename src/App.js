
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchPage from './SearchPage'

function App() {
  return (
    <div className="app">
      <Router>
    <Header></Header>
    
     <Switch>
       <Route path="/search">
         <SearchPage></SearchPage>
         <Footer></Footer>
         
       </Route>
       <Route exact path="/">
       <Home></Home>
     <Footer></Footer>
       </Route>
     </Switch>
     </Router>
     {/* home */}
         {/* header */}
         {/* date and banner */}
         {/* cards */}
         {/* footer  */}
     {/* home ends */}

    {/* searchPage */} 
    

     
    </div>
  );
}

export default App;
