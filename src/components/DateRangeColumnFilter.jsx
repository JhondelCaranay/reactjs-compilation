import React from "react";

export function dateBetweenFilterFn(rows, id, filterValues) {
    const sd = filterValues[0] ? new Date(filterValues[0]) : undefined
    const ed = filterValues[1] ? new Date(filterValues[1]) : undefined

    if (ed || sd) {
        return rows.filter(r => {
            const cellDate = new Date(r.values[id])

            if (ed && sd) {
                return cellDate >= sd && cellDate <= ed
            } else if (sd) {
                return cellDate >= sd
            } else if (ed) {
                return cellDate <= ed
            }
        })
    } else {
        return rows
    }
}

export function DateRangeColumnFilter({
    column: {
        filterValue = [],
        preFilteredRows,
        setFilter,
        id
    } }) {


    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : new Date()
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : new Date()
        preFilteredRows.forEach(row => {
            min = Math.min(row.values[id], min)
            max = Math.max(row.values[id], max)
        })
        return [min, max]
    }, [id, preFilteredRows])

    const onClear = () => {
        setFilter(undefined)
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <input
                type="date"
                value={filterValue[0] || ''}
                onChange={e => {
                    const val = e.target.value
                    setFilter((old = []) => [val ? val : undefined, old[1]])
                }}
                style={{
                    width: '100%',
                    marginBottom: '0.5rem',
                }}
            />
            <input
                type="date"
                value={filterValue[1] || ''}
                onChange={e => {
                    const val = e.target.value
                    setFilter((old = []) => [old[0], val ? val : undefined])
                }}
                style={{
                    width: '100%',
                    marginBottom: '0.5rem',
                }}
            />

            <button onClick={onClear}>Clear</button>
        </div>
    )
}
