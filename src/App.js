
import './App.css';
import Nav from "./components/Nav"
import Carousel from "./components/Carousel"
import MenKids from "./components/MenKids"
import Thegame from "./components/Thegame"
import Getready from "./components/Getready"
import Twoimg from './components/Twoimg';
import Newbold from './components/Newbold.jsx'
import Freeship from './components/Freeship.jsx';
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Nav/>
        <Carousel/>
      </header>
      {/* below line of carousel */}
      <div>
        <p className='md:text-2xl text-md font-bold text-center bg-[#E8EDFE] py-5' style={{fontFamily:" DM Serif Display"}}>
Get UPTO 40% OFF on your 1st order SHOP NOW</p>
      </div>

      <MenKids/>
{/*  New Products vala section*/}
      <Thegame/>
      <Getready/>
      <Twoimg/>
{/* All products vala section  */}
      <Newbold/>
      <Freeship/>
    </div>
  );
}

export default App;
