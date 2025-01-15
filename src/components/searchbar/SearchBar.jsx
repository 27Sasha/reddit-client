import React, {useState} from "react"
export function SearchBar(){
    const [searchTerm, setSearchTerm] = useState('')
    const [submitValue, setSubmitValue] = useState('')


    const handleInput = (e) =>{
        setSearchTerm(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setSubmitValue(searchTerm)
    }
 // submit paragraph not showing
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type ='text' value = {searchTerm} onChange = {handleInput} placeholder="Search"></input>
                <button type="submit">Search</button>
            </form>
            { submitValue ? <p>{submitValue}</p> : ''}
            
        </div>
    )
}
