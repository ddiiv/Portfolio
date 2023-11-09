import './styles/App.css';
import "./styles/htmltags.css"
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import { UserProvider } from './context/UserContext';
import { useUserFunctions } from './context/UserContext';


function App() {
  const context = useUserFunctions();

  return (

    <UserProvider>
      <div className="App">
        <BrowserRouter >

          <main className="page">
            <section className='pagecontainer'>
              <Navbar />
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
    </UserProvider>
  );
}

export default App;
