import './styles/App.css';
import "./styles/htmltags.css"
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import { UserProvider } from './context/UserContext';
import { ProyectProvider } from './context/ProyectContext';
import Footer from './components/Footer';

function App() {


  return (

    <UserProvider>
      <ProyectProvider>
        <div className="App">
          <BrowserRouter >
            <main className="page">
              <Navbar />
              <section className='pagecontainer'>
                <div className='separator-nav'></div>
                <Routes>
                  <Route>
                    <Route path='/' element={<Main />} />
                  </Route>
                </Routes>
              
              </section>
            </main>
          </BrowserRouter>
        </div>
      </ProyectProvider>
    </UserProvider>
  );
}

export default App;
