
import './App.css';
import Nav from "./components/Nav"
import Carousel from "./components/Carousel"
import MenKids from "./components/MenKids"
import Thegame from "./components/Thegame"
import Getready from "./components/Getready"
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
      <Thegame/>
      <Getready/>
    </div>
  );
}

export default App;
