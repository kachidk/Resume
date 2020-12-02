import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Overview from './pages/Overview';
import Resume from './pages/Resume.js';
import {Reports, Reports1, Reports2, Reports3, Users, Revenue } from './pages/Reports.js';
import C404 from './pages/C404.js';



function App() {
  return (

    <Router>
      <Sidebar />
        <Switch>
           <Route exact path="/" component={Overview} />
           <Route  path="/resume" component={Resume} />
           <Route  path="/reports/reports1" component={Reports1} />
           <Route  path="/reports/reports2" component={Reports2} />
           <Route  path="/reports/reports3" component={Reports3} />
           <Route  path="/revenue" component={Revenue} />
           <Route  path="/users" component={Users} />
           <Route component={C404} />
        </Switch>
    </Router>
    
  );
}

export default App;

