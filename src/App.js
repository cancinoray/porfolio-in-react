import './App.css';
import Header from './components/Header/Header'
import logo from './assets/logo.svg'
import Profile from './pages/Profile'

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Profile userName='cancinoray' />
    </div>
  );
}

export default App;
