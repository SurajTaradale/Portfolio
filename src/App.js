
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Web from './Components/web';
import View from './Components/PDFViewer';

function App() {
  return (
    <Router>
      <div className="container-fluid App">
        <Route exact path="/" component={Web} />
        <Route path="/View" component={View} />
      </div>
    </Router>
  );
}

export default App;
