
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Web from './Components/web';

function App() {
  return (
    <Router>
      <div className="container-fluid App">
        <Route exact path="/" component={Web} />
      </div>
    </Router>
  );
}

export default App;
