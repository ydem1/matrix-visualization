import "./App.css";
import { Table, TableBody, TableHeader } from "./components/Table";
import { TableFooter } from "./components/Table/TableFooter";
import { generateMatrix } from "./utils/generateMatrix";

const M = 2;
const N = 3;

const TITLE = "Matrix visualization";

function App() {
  const matrix = generateMatrix(M, N);

  return (
    <main>
      <h1>{TITLE}</h1>

      <section>
        <Table ariaLabel={TITLE}>
          <TableHeader columnNumbers={N} />
          <TableBody matrix={matrix} />
          <TableFooter columnNumbers={N} />
        </Table>
      </section>
    </main>
  );
}

export default App;
