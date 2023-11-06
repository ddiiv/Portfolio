import './styles/App.css';
import Navbar from './components/Navbar';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="page">
        <section className='pagecontainer'>

          <BrowserRouter >
            <Routes>
              <Route>
                <Route path='/' element={<Main />} />
                <Route path='/home' element={<Main />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </section>
      </main>
    </div>
  );
}

export default App;
