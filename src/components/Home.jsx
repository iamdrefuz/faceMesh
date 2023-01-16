import React, { useState } from 'react';

const Home = () => {
    const [count , setCount] = useState (0)
    return (
        <div>
         <h1 className='header-count'> {count}</h1>
         <button className='btn ' onClick={()=>{setCount(count + 1)}}>Increment</button>
         <button className='btn ' onClick={()=>{setCount(count - 1)}}>Decrement</button>
        </div>

    );
};

export default Home;