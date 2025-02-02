import "./App.css";
import { InputValues } from "./components/InputValues";
import { Matrix } from "./components/Matrix";
import { MatrixProvider } from "./components/MatrixContext";

const TITLE = "Matrix visualization";

const App = () => (
  <MatrixProvider>
    <main>
      <h1 className="title">{TITLE}</h1>
      <InputValues />
      <Matrix ariaLabel={TITLE} />
    </main>
  </MatrixProvider>
);

export default App;
