import { COLUMNS, GROUPED_COLUMNS } from './columns'
import MOCK_DATA from './MOCK_DATA.json'
import { useRowSelect, useTable } from 'react-table'
import { useMemo } from 'react'
import "./table.css"
import CheckBox from './CheckBox'
const RowSelection = () => {
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
        footerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
    } = useTable(
        {
            columns: columns,
            data: data
        },
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => {
                return [
                    {
                        id: 'selection',
                        Header: ({ getToggleAllRowsSelectedProps }) => (
                            <CheckBox {...getToggleAllRowsSelectedProps()} />
                        ),
                        Cell: ({ row }) => <CheckBox {...row.getToggleRowSelectedProps()} />
                    },
                    ...columns
                ]
            })
        }
    )

    const firstPageRows = rows.slice(0, 10)

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
                        firstPageRows.map((row) => {
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
                <tfoot>
                    {footerGroups.map((footerGroup) => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map((column) => (
                                    <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                                ))
                            }
                        </tr>
                    ))}
                </tfoot>

            </table>
            <div>
                <pre>
                    <code>
                        {JSON.stringify(
                            {
                                selectedFlatRows: selectedFlatRows.map(row => row.original)
                            },
                            null,
                            2
                        )}
                    </code>
                </pre>
            </div>
        </>
    )
}


export default RowSelection