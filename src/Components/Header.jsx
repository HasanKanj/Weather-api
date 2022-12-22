import React, { useState } from 'react'

export default function Header({fetchData}) {
    const [searchedWord, setSearchedWord] = useState('')

    const btnClicked = () =>{
        fetchData(searchedWord)
    }
    
return (
<div className='header_nav'>
    <input className='header_input' placeholder='Type in a City Name' type="text" id="message" onChange={(e)=>setSearchedWord(e.target.value)}/>
    <button className='header_button' onClick={btnClicked}>Find Weather</button>
</div>
) }


