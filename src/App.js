import './App.css';
// import MyNewComponent from './components/MyNewComponent';
import MainPages from './components/pages/mainPages/MainPages.component';

function App() {
  return (
    <div className="App">
      <MainPages name="Azul" />
      {/* <h1>Hello Dojo!</h1>
      <h3>Things I need to do</h3>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a Maraton</li>
        <li>Feed the dogs</li>
      </ul>
      
      <MyNewComponent someText="Hola Mundo" />
      <MyNewComponent someText="reutilizo" /> */}
    </div>
  );
}

export default App;