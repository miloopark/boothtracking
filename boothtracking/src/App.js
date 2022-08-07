import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={occupy} className="booth1">
        Booth 1
      </button>
      <button onClick={occupy} className="booth2">
        Booth 2
      </button>
      <button onClick={occupy} className="booth3">
        Booth 3
      </button>
      <button onClick={occupy} className="booth4">
        Booth 4
      </button>
      <button onClick={occupy} className="booth5">
        Booth 5
      </button>
      <button onClick={occupy} className="booth6">
        Booth 6
      </button>
      <button onClick={occupy} className="booth7">
        Booth 7
      </button>
      <button onClick={occupy} className="booth8">
        Booth 8
      </button>
      <button onClick={occupy} className="booth9">
        Booth 9
      </button>
    </div>
  );
}

function occupy(){
  alert("occupied");

}


export default App;
