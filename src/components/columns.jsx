import { format } from 'date-fns'
import { dateBetweenFilterFn, DateRangeColumnFilter } from './DateRangeColumnFilter'



export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        // Filter: ColumnFilter
        disableFilters: true, // app will be broken if this is not set
        sticky: 'left',
        Cell: (params) => {

            // console.log("🚀 ~ file: columns.jsx:25 ~ params", params.row.original)

            return (<div
                style={{
                    color: 'blue',
                    fontWeight: 'bold'
                }}
            >{params.value}</div>)
        },
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
        // Filter: ColumnFilter
        sticky: 'left'
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
        // Filter: ColumnFilter,
        sticky: 'left'
    },
    {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
        // Filter: ColumnFilter,
        Filter: DateRangeColumnFilter,
        filter: dateBetweenFilterFn,
        Cell: ({ value }) => {
            return format(new Date(value), 'dd/MM/yyyy')
        },
    },
    {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country',
        // Filter: ColumnFilter
    },
    {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone',
        // Filter: ColumnFilter
    },
    {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email',
        // Filter: ColumnFilter
    },
    {
        Header: 'Age',
        Footer: 'Age',
        accessor: 'age',
        // Filter: ColumnFilter
        sticky: "right"
    },
]

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name'
            }
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Date of Birth',
                Footer: 'Date of Birth',
                accessor: 'date_of_birth'
            },
            {
                Header: 'Country',
                Footer: 'Country',
                accessor: 'country'
            },
            {
                Header: 'Phone',
                Footer: 'Phone',
                accessor: 'phone'
            }
        ]
    }
]
