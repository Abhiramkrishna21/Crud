import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Company from './Component/Company';
import { Provider } from 'react-redux';
import compstore from './Redux/Store';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <Provider store={compstore}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Company></Company>}></Route>
        </Routes>
        </BrowserRouter>
        <ToastContainer position='top-left'></ToastContainer>
        </Provider>
    
    </div>
  );
}

export default App;
