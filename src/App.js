import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume.js';
import Projects from './pages/Projects.js';
import C404 from './pages/C404.js';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="bg-white">
      <Router>
        <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/resume" component={Resume} />
            <Route  path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route component={C404} />
          </Switch>
      </Router>
    </div>
    
  );
}

export default App;

