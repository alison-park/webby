import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CarouselPage from "./CarouselReact";

const name = {
  title: "al!son park"
};
const App = () =>  {
  return (
    <div>
    <h1> {name.title}</h1>
  <CarouselPage>
  </CarouselPage>
  </div>
  )
}


/*
<CarouselPage>
</CarouselPage>
*/

/*
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img id="AboutMe" src="./public/cd.png"></img>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello!</p>
        <p>
          <button onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};
*/
export default App;