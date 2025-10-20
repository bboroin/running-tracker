import "./App.css";
import Header from "./components/Header/Header";
import RecordForm from "./components/Records/RecordForm";
import RecordList from "./components/Records/RecordList";

function App() {
  return (
    <div className="App">
      <Header />
      <RecordForm />
      <RecordList />
    </div>
  );
}

export default App;
