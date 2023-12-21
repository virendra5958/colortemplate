import Colorcard from './conmponent/Colorcard';
import './App.css';

function App() {
  return (
    <div className="main">
      <div  className='App'>
      <Colorcard colorCode = "#FF6563" colorName= "PINK"/>
      <Colorcard colorCode = "#333333" colorName= "GRAY"/>
      <Colorcard colorCode = "#000000" colorName= "BLACK"/>
      <Colorcard colorCode = "#38BB14" colorName= "GREEN"/>
      <Colorcard colorCode = "#C90B0B" colorName= "RED"/>
      
      <Colorcard colorCode = "#FF8000" colorName= "ORANGE"/>
      <Colorcard colorCode = "#FFF500" colorName= "YELLOW"/>
      <Colorcard colorCode = "#CCCCCC" colorName= "LIGHT GAY"/>
      <Colorcard colorCode = "#7E41A2" colorName= "PURPLE"/>
      <Colorcard colorCode = "#C14911" colorName= "BROWN"/>
      </div>
    </div>
  );
}

export default App;
