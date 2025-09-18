import Counter from './counter';
import './App.css'
import Batsman from './Bartsman';
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friends';
// 1.just write a simple fetch with json conversion
const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())

const fetchFriends = async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}


function App() {

  const friendsPromise = fetchFriends();


 function handleClick(){
  alert("I am clicked")
 }

 const handleClick3=()=>{
  alert("clicked 3")
 }

 const handleAdd5 =(num) =>{
const newNum = num+5;
alert(newNum);
 }

  return (
    <>
      
      <h3>Vite + React</h3>
      {/* // Wrap the data loading component under suspense */}
      <Suspense fallback={<h3>Loading....</h3>}>
      <Users fetchUsers={fetchUsers} ></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
<Friends friendsPromise={friendsPromise} ></Friends>
      </Suspense>
<Batsman></Batsman>
      <Counter></Counter>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert("clicked 2")
      }}>Click Me2</button>

      <button onClick={handleClick3}>Click Me3</button>

      <button onClick={()=>alert("click 4")}>Click 4</button>
     
     <button onClick={()=>handleAdd5(10)}>Click Me5</button>
    </>
  )
}

export default App
