import './index.css';
import Nav from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <div className="container">
        <Card img='ridham9.jpg' star='4.5' reviews={12} country='India' title='Ridham' price={130} />
        <Card img='ridham10.jpg' star='5.0' reviews={120} country='USA' title='Ridham' price={335} />
        <Card img='ridham12.jpg' star='3.5' reviews={125} country='Canada' title='Ridham' price={364} />
        <Card img='yogi3.jpg' star='4.5' reviews={245} country='Bangladesh' title='Yogi' price={450} />
        <Card img='yogi4.jpg' star='4.5' reviews={356} country='France' title='Yogi' price={240} />
        <Card img='yogi5.jpg' star='4.5' reviews={10} country='UK' title='Yogi' price={300} />

      </div>
    </div>
  );
}

export default App;
