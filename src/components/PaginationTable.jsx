import { COLUMNS, GROUPED_COLUMNS } from './columns'
import MOCK_DATA from './MOCK_DATA.json'
import { usePagination, useTable } from 'react-table'
import { useMemo } from 'react'
import "./table.css"
const PaginationTable = () => {
    // useMemo - this is a hook that will only recompute the memoized value when one of the dependencies has changed.
    // This optimization helps to avoid expensive calculations on every render.

    // recomended to use useMemo when you have a large data set and you are trying to render that data set.
    // const columns = useMemo(() => GROUPED_COLUMNS, [])
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow
    } = useTable(
        {
            columns: columns,
            data: data,
            // initialState: { pageIndex: 1 } // ad initial state to the table to start on page 2
        },
        usePagination
    )

    const { pageIndex, pageSize } = state

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>

                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>

                <span>
                    | Go to page: {' '}
                    <input type="number" defaultValue={pageIndex + 1}
                        onChange={e => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(pageNumber)
                        }}
                        style={{ width: '50px' }}
                    />
                </span>

                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {
                        [10, 25, 50, 100].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))
                    }
                </select>

                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>

                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>

                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>
            </div>
        </>
    )
}


export default PaginationTable