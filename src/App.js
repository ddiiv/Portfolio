import './styles/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <BrowserRouter >
          <Navbar />
          <main className="page">
            <section className='pagecontainer'>
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
