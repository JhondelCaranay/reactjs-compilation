import { useState } from "react"
import { useAsyncDebounce } from "react-table"

export const GlobalFilter = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter)

    // https://stackoverflow.com/questions/70819371/referenceerror-regeneratorruntime-is-not-defined-when-running-testing
    // ReferenceError: regeneratorRuntime is not defined
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)

    // useAsyncDebounce - adds a delay to the onChange event


    return (
        <span>
            Search:{' '}
            <input
                value={value || ''}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
            />
        </span>
    )
}
