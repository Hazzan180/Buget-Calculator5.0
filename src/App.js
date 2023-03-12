import './App.css';
import Budget from './Components/Budget';
import Remaining from './Components/Remaining';
import ExpenseTotal from './Components/ExpenseTotal';
import ExpenseList from './Components/ExpenseList';
import ExpenseFrom from './Components/ExpenseFrom';
import AppProvider from './Context/AppProvider';

function App() {
  return (
    <AppProvider>
    <div className="App">
      <h1>My Budget Planner</h1>
      <div className='Container'>
        <Budget />
        <Remaining />
        <ExpenseTotal />
      </div>
      <h1>Expenses</h1>
      <ExpenseList />
      <div>
        <h1>Add Expense</h1>
        <ExpenseFrom />
      </div>
    </div>
    </AppProvider>
  );
}

export default App;
