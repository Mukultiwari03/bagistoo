
import './App.css';
import Nav from "./components/Nav"
import Carousel from "./components/Carousel"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Carousel/>
      </header>
      {/* below line of carousel */}
      <div>
        <p className='text-2xl font-bold text-center bg-[#E8EDFE] py-5' style={{fontFamily:" DM Serif Display"}}>
Get UPTO 40% OFF on your 1st order SHOP NOW</p>
      </div>
    </div>
  );
}

export default App;
