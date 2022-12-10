
export const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column
    return (
        <span>
            <input
                value={filterValue || ''}
                onChange={e => setFilter(e.target.value)}
                placeholder="Search..."
            />
        </span>
    )
}

