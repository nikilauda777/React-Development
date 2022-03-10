import React, {useState} from "react";

const Counter = function (){

    const [likes, setLikes] = useState(0)

function increment (){
    setLikes(likes + 1)
}
function decrement (){
    setLikes(likes - 1)
}

return (
    <div>
        <h1>{likes}</h1>
        <button onClick={increment}>More</button>
        <button onClick={decrement}>Lower</button>
    </div>
    );
}
export default Counter;

// <input
//     type="number"
//     value={likes}
//     onChange={event => setLikes(event.target.value)}  // изменения состояния объекта лайки
// />