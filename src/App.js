// import logo from './logo.svg';
import './App.css';
import FileTree from "./FileTree"
import FileEditor from "./FileEditor"

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <main>
        <div className="row">
          <div className="column fileTreeColumn">
            <FileTree/>
          </div>
          <div className="column fileEditorColumn">
            <FileEditor/>
          </div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
