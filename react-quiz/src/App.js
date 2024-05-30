
import './App.css';
import Header from './Header';
import LoaderQuestions from './LoaderQuestions';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <LoaderQuestions />
        
      </Main>
    </div>
  );
}

export default App;
