import logo from './logo.svg';
import './App.css';
import {DateRange} from './dateRange'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'; // theme css file

function App() {
  return (
    <div className="App">
        <DateRange/>
    </div>
  );
}

export default App;
