import React from "react"

export default function Filter({value, onChange}) {
    return (
        <form>
            <label>
                <input type="text" name="filter" value={value} onChange={onChange } />
            </label>
        </form>
    )
}