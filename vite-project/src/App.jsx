// import React, { useState } from "react";

// export default function App() {

//   const [task, setTask ] = useState()
//   const [filter, setFilter] = useState('all')
//   const [tasks, setTasks ] = useState([
//     { taskName: 'Гүл суғару', completed: true },
//     { taskName: 'Күнделікті уй тапсырмасын орындау', completed: false }
//   ])
//   const handleRemove = (id) => {
//     setTasks(tasks.filter((task,index) =>index!= id))
//   }


// const filteredTasks = tasks.filter((task, index) => {
//   if(filter == 'all'){
//     return true
//   } else if (filter == 'complete'){
//     return task.completed
//   } else if (filter == 'incomplete'){
//     return !task.completed
//   }
// })



//   function handleSumbit(e) {
//     e.preventDefault()
//     setTasks([...tasks, { taskName: task, completed: false }])
//     setTask('')
//   }
//   return (
//     <div>
//       <form onSubmit={(handleSumbit)}>
//         <input value={task} type="text" onChange={(e) => setTask(e.target.value)} />
//         <button type="sumbit">Қосу</button>
//       </form>

//       <div className="filterbox">
//               <button onClick={() => setFilter('all')}>all</button>
//               <button onClick={() => setFilter('complete')}>complete</button>
//               <button onClick={() => setFilter('incomplete')}>incomplete</button>
//       </div>


//       <ul>
//         {filteredTasks.map((tapsyrma, index) => {
//           return <li key={index}>
//             <div>{tapsyrma.taskName}</div>
//             <div className="btn-box">
//               {tapsyrma.completed ? <button style={{ color: 'green' }}>✅</button> : <button>❌</button>}

//               <button onClick={() =>handleRemove(index)}>🗑</button>
//             </div>
//           </li>
//         })}
//       </ul>
//     </div>
//   )
// }




// import { useState, useEffect } from "react";

// export default function ColorPicker() {
//   const [color, setColor] = useState('white');

//   useEffect(() => {
//     const savedColor = localStorage.getItem("color");
//     if (savedColor) {
//       setColor(savedColor);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("color", color);
//   }, [color]);

//   return (
//     <div style={{ backgroundColor: color, height: "50vh" }}>
//       <h2>Түс таңда:</h2>
//       <button onClick={() => setColor("red")}>🔴 Қызыл</button>
//       <button onClick={() => setColor("blue")}>🔵 Көк</button>
//       <button onClick={() => setColor("green")}>🟢 Жасыл</button>
//     </div>
//   );
// }



// import { useState, useEffect } from "react";

// export default function Login() {
//   const [username, setUsername] = useState("Name");

//   useEffect(() => {
//     const savedUser = localStorage.getItem("username");
//     if (savedUser) {
//       setUsername(savedUser);
//     }
//   }, []);

//   useEffect(() => {
//     if (username) {
//       localStorage.setItem("username", username);
//     } else {
//       localStorage.removeItem("username");
//     }
//   }, [username]);

//   return (
//     <div>
//       <h2>{username ? `Сәлем, ${username}!` : "Жүйеге кіріңіз"}</h2>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value) } // 🟡 Input өзгергенде state жаңарту
//         placeholder="Атыңызды енгізіңіз"
//       />
//       <button onClick={() => setUsername("")}>🚪 Шығу</button>
//     </div>
//   );
// }



// import { useState, useEffect } from "react";

// export default function VolumeControl() {
//   const [volume, setVolume] = useState("50"); // 🟡 Мұнда localStorage мәнін алу керек

//   useEffect(() => {
//     const savedVolume = localStorage.getItem("volume");
//     if (savedVolume) {
//       setVolume(Number(savedVolume));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("volume", volume);
//   }, [volume]);

//   return (
//     <div>
//       <h2>Дыбыс деңгейі: {volume}</h2>
//       <input
//         type="range"
//         min="0"
//         max="100"
//         value={volume}
//         onChange={(e) => setVolume(e.target.value)} // 🟡 Input өзгергенде state жаңарту
//       />
//     </div>
//   );
// }





// import { useState, useEffect } from "react";

// export default function Timer() {
//   const [seconds, setSeconds] = useState("0");

//   useEffect(() => {
//     const savedTime = localStorage.getItem("seconds");
//     if (savedTime) {
//       setSeconds(Number(savedTime));
//     }
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("seconds", seconds);
//   }, [seconds]);

//   return (
//     <div>
//       <h2>Таймер: {seconds} сек</h2>
//     </div>
//   );
// }






// import { useState, useEffect } from "react";

// export default function CurrencyConverter() {
//   const [currency, setCurrency] = useState("Currency"); 

//   useEffect(() => {
//     const savedCurrency = localStorage.getItem("currency");
//     if (savedCurrency) {
//       setCurrency(savedCurrency);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("currency", currency);
//   }, [currency]);

//   return (
//     <div>
//       <h2>Таңдалған валюта: {currency}</h2>
//       <button onClick={() => setCurrency("USD")}>💵 USD</button>
//       <button onClick={() => setCurrency("EUR")}>💶 EUR</button>
//       <button onClick={() => setCurrency("KZT")}>🇰🇿 KZT</button>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import ColorPicker from "./assets/cars";




// function asd() {
//    <div>
//     <h1>asd</h1>
//    </div>
// }
// export default asd;


import "./style.css"
import React from "react"


export default function login() {
   

   function Savelogin() {
      const name = localStorage.getItem('name')
      const email = localStorage.getItem('email')
      const password = localStorage.getItem('password')
      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
      localStorage.setItem("password", password)


      const hand = () => {
         const newUser = { name, email, password };
         localStorage.setItem('user', JSON.stringify(newUser))
         setUser(newUser)
       }
    }

   return (

    <div class="form-container">
        <div class="form">
            <h2>Login</h2>

            <form>
            <div class="input-group">
                    <input type="name" name="name" placeholder="Name" required />
                    
                </div>
                <div class="input-group">
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div class="input-group">
                    <input type="password" name="password" placeholder="Пароль" required />
                </div>
                <button onClick={Savelogin} type="submit" class="btn">Войти</button>
            </form>
            <hr class="line" />
            <p class="home">Home</p>
        </div>
    </div>
    )
   
}




// import "./style.css"
// import React from "react"
// import login from "./assets/login"


// export default function basy() {

//    return (
//     <div>
//         <login/>
//     </div>
//     )
   
// }
