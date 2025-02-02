import "./App.css";
import { InputValues } from "./components/InputValues";
import { MatrixProvider } from "./components/MatrixContext";
import { Table, TableBody, TableHeader } from "./components/Table";
import { TableFooter } from "./components/Table/TableFooter";

const TITLE = "Matrix visualization";

const App = () => (
  <MatrixProvider>
    <main>
      <h1 className="title">{TITLE}</h1>
      <InputValues />

      <section className="table">
        <Table ariaLabel={TITLE}>
          <TableHeader />
          <TableBody />
          <TableFooter />
        </Table>
      </section>
    </main>
  </MatrixProvider>
);

export default App;
