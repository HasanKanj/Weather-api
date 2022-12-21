import React from 'react'

const Header = () => {
return (
<div className='header_nav'>
<input className='header_input'
placeholder='Type in a City Name'
type="text"
 id="message"

/>
 <button className='header_button'>Find Weather</button>
</div>
)
}

export default Header
