import { COLUMNS, GROUPED_COLUMNS } from './columns'
import MOCK_DATA from './MOCK_DATA.json'
import { useColumnOrder, useTable } from 'react-table'
import { useMemo } from 'react'
import "./table.css"
const ColumnOrder = () => {
    // useMemo - this is a hook that will only recompute the memoized value when one of the dependencies has changed.
    // This optimization helps to avoid expensive calculations on every render.

    // recomended to use useMemo when you have a large data set and you are trying to render that data set.
    // const columns = useMemo(() => GROUPED_COLUMNS, [])
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups, footerGroups,
        rows,
        prepareRow,
        setColumnOrder
    } = useTable({
        columns: columns,
        data: data
    },
        useColumnOrder,
    )


    const changeOrder = () => {
        setColumnOrder([
            'id',
            'first_name',
            'last_name',
            'email',
            'phone',
            'age',
            'visits',
            'progress',
        ])
    }

    return (
        <>
            <button onClick={changeOrder}>Change Order</button>

            <button onClick={() => setColumnOrder(undefined)}>Reset Order</button>

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
                        rows.map((row) => {
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
        </>
    )
}


export default ColumnOrder