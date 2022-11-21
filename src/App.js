import './App.css';
import Company from './Company';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <h1>Exercise</h1>
      <Company company_name="Hello" num_of_employees="56" company_address="Jerusalem, Yaffo 5" />
      <Counter></Counter>
    </div>
  );
}

export default App;
