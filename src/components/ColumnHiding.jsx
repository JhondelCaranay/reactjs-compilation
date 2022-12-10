import { COLUMNS, GROUPED_COLUMNS } from './columns'
import MOCK_DATA from './MOCK_DATA.json'
import { useTable } from 'react-table'
import { useMemo } from 'react'
import "./table.css"
import CheckBox from './CheckBox'
const ColumnHiding = () => {
    // useMemo - this is a hook that will only recompute the memoized value when one of the dependencies has changed.
    // This optimization helps to avoid expensive calculations on every render.

    // recomended to use useMemo when you have a large data set and you are trying to render that data set.
    // const columns = useMemo(() => GROUPED_COLUMNS, [])
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow,
        allColumns,
        getToggleHideAllColumnsProps
    } = useTable({
        columns: columns,
        data: data
    })

    return (
        <>
            <div>
                <div>
                    <CheckBox {...getToggleHideAllColumnsProps()} /> Toggle All
                </div>
                {allColumns.map(column => {
                    // console.log("🚀 ~ file: ColumnHiding.jsx:32 ~ ColumnHiding ~ column", column.id)
                    // // dont show the id column
                    // if (column.id === 'id') {
                    //     return null
                    // }

                    return (
                        <div key={column.id}>
                            <label>
                                <input type="checkbox" {...column.getToggleHiddenProps()} />
                                {column.Header}
                            </label>
                        </div>
                    )
                })}
                <br />
            </div>

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


export default ColumnHiding