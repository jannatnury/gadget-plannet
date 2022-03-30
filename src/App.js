import './App.css';
import Footer from './componants/Footer/Footer';
import Header from './componants/Header/Header';
import Question from './componants/Question/Question';
import Shop from './componants/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Question></Question>
      <Footer></Footer>
    </div>
  );
}

export default App;
