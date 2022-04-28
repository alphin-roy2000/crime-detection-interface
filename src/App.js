
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import DepartmentComponent from './components/layers/department details/departmentcomponents';
import EmployeeList from './components/layers/employee details/employeelist';
import LeftNav from './components/layers/leftPanel';
import RightNav from './components/layers/rightpanel';
// const [modalOpen, setModalOpen] = useState(false);

function App() {


  return (
    <div className="App">
    <Router>
      
    <LeftNav/>
    <RightNav  className="RightNav" />
   
    
    </Router>
    
    </div>
  );
}

export default App;
