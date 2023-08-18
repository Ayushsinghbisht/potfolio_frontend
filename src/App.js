// import Profile from "./Portfoliocontainer/Home/Profile/Profile";
import './App.css';
// import ReactDOM from 'react-dom';
// import Footer from "./Portfoliocontainer/Home/Footer/Footer";
// import Home from "./Portfoliocontainer/Home/Home";
import Portfoliocontainer from "./Portfoliocontainer/PortfolioContainer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (<>
    <div className="App">
      
     <Portfoliocontainer/>
     <ToastContainer />
    </div>
    </>
  );
  
}

export default App;
