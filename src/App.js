import Todo from './components/Todo';
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <br></br>
      <Todo text="Master React" />
      <br></br>
      <Todo text="Build iRepairIT Website" />
    </div>
  );
}

export default App;
