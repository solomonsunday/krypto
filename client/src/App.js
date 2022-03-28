import logo from './logo.svg';
import { Navbar, Welcome, Services, Loader, Transactions } from './components/index';
import './App.css';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className="min-h-screen">
        <div className='gradient-bg-welcome'>
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />

      </div>

    </>
  );
}

export default App;
