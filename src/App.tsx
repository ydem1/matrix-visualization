import "./App.css";
import { MatrixProvider } from "./components/MatrixContext";
import { Table, TableBody, TableHeader } from "./components/Table";
import { TableFooter } from "./components/Table/TableFooter";

const TITLE = "Matrix visualization";

const App = () => (
  <MatrixProvider>
    <main>
      <h1>{TITLE}</h1>

      <section>
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
