import React from 'react'

const Card = () => {
    return(
    <div className='maindiv'>
     <div className='div1'>
        <h1>JohnWick</h1>
    </div>
    <div className='div2'>
        <img src='johnwick1.jpg' alt='Image' height='200' width='200' />
        <p>John was born Jardani Javanavič in a Padhorje village somewhere in the Byelorussian SSR of the Soviet Union to a Ruska Roma family on September 2, 1964.</p>
        <span>Post</span>
        <span>Followers</span>
        <span>Following</span>
        <br></br>
        <br></br>
        <button>Follow</button>
        <button>Message</button>
    </div>      
    </div>
    )
}
export default Card