import './App.css'
import 'regenerator-runtime/runtime'
import BasicTable from './components/BasicTable'
import FilteringTable from './components/FilteringTable'
import SortingTable from './components/SortingTable'
import PaginationTable from './components/PaginationTable'
import RowSelection from './components/RowSelection'
import ColumnOrder from './components/ColumnOrder'
import ColumnHiding from './components/ColumnHiding'
import StickyTable from './components/StickyTable'

function App() {

  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelection /> */}
      {/* <ColumnOrder /> */}
      {/* <ColumnHiding /> */}
      <StickyTable />
    </div>
  )
}

export default App
