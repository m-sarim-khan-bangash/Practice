//****************UseContext Hook**************** (Used for passing data to nested components)
// import "./App.css";
// import Child from "./Child";
// import React, { createContext, useState } from "react";

// export const GlobalInfo = createContext();

// function App() {
//   const [color, setColor] = useState("red");
//   const [name, setName] = useState("John Doe");
//   return (
//     <GlobalInfo.Provider value={{ color: color }}>
//       <>
//         <h1>{name}</h1>
//         <h1>App Component</h1>
//         <Child />
//         <button onClick={() => setColor("purple")}>Change Color</button>
//         <button onClick={() => setName("Jane Doe")}>Cange Name</button>
//       </>
//     </GlobalInfo.Provider>
//   );
// }

// export default App;

// **************useRef Hook************** (Use for DOM manipulation)
// import React, { useRef } from 'react'

// const App = () => {
//   const inputRef = useRef(null)

//   function handleInput() {
//     console.log(inputRef.current.value)
//     inputRef.current.focus()
//     inputRef.current.style.color = 'red'
//   }

//   return (
//     <div>
//       <input  type="text" ref={inputRef} />
//       <button onClick={handleInput}>Submit</button>
//     </div>
//   )
// }

// export default App

// **************UseMemo Hook************** (Use for performance optimization and it returns Html element)

// import React, { useMemo, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("John Doe");

//   const noRender = useMemo(() => {
//     return (
//       <div>
//         <h1>Count: {count}</h1>
//         <h1>{name}</h1>
//       </div>
//     );
//   }, [name]);

//   return (
//     <div>
//       {noRender}
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setName("Jane Doe")}>Click</button>
//     </div>
//   );
// };

// export default App;

// ***************************UseReducer Hook*******************************

// import React, { useReducer } from "react";

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// const App = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => dispatch("increment")}>Increment</button>
//       <button onClick={() => dispatch("decrement")}>Decrement</button>
//       <button onClick={() => dispatch("reset")}>Reset</button>
//     </div>
//   );
// }

// export default App;

// ************************Todo and Quiz App************************

// import React from "react";
// // import TodoApp from "./TodoApp/TodoApp";
// // import Quiz from "./QuizApp/Quiz";
// import "./Quiz.css";

// const App = () => {
//   return (
//     <>
//       {/* <TodoApp /> */}

//       {/* <Quiz /> */}
//     </>
//   );
// };

// export default App;

// ************************Search functionality************************
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const DataFetchingComponent = () => {
//   const [data, setData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   // const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     // Fetch data from API
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         setData(response.data);
//         // setFilteredData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   // useEffect(() => {
//   //   // Filter data based on search query
//   //   setFilteredData(
//   //     data.filter((item) =>
//   //       item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   //     )
//   //   );
//   // }, [searchQuery, data]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by name"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <ul>
//         {data
//           .filter((item) =>
//             item.name.toLowerCase().includes(searchQuery.toLowerCase())
//           )
//           .map((item) => (
//             <li key={item.id}>{item.name} - {item.email}</li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default DataFetchingComponent;

// ***************************Context API*******************************

// import React, { createContext } from "react";
// import ChildA from "./ChildA";

// const data = createContext();

// const App = () => {
//   let name = "John Doe";
//   return (
//     <>
//       <data.Provider value={name}>
//         <ChildA />
//       </data.Provider>
//     </>
//   );
// };

// export default App;
// export { data };

// ***************************UseContext Hook (nested)*******************************

// import React, { createContext } from "react";
// import ChildA from "./ChildA";

// const data = createContext();
// const data2 = createContext();

// const App = () => {
//   let name = "John Doe";
//   let gender = "Male";
//   return (
//     <>
//       <data.Provider value={name}>
//         <data2.Provider value={gender}>
//           <ChildA />
//         </data2.Provider>
//       </data.Provider>
//     </>
//   );
// };

// export default App;
// export { data, data2 };

// ***************************UseMemo*******************************

// import React, { useMemo, useState } from "react";

// const App = () => {
//   const [add, setAdd] = useState(0);
//   const [minus, setMinus] = useState(100);

//   const multiplication = useMemo(() => {
//     console.log("Test")
//     return add * 10;
//   }, [add]);

//   return (
//     <div>
//       {multiplication}
//       <h1>{add}</h1>
//       <h1>{minus}</h1>
//       <button onClick={() => setAdd(add + 1)}>Increment</button>
//       <button onClick={() => setMinus(minus - 1)}>Click</button>
//     </div>
//   );
// }

// export default App;

// ***************************Contact App*******************************

import React, { useEffect, useState } from "react";
import Header from "./ContactApp/Header";
import AddContact from "./ContactApp/AddContact";
import ContactList from "./ContactApp/ContactList";
import "./Contact.css";
import uuid4 from "uuid4";

const App = () => {
  const localStorageKey = "contact";

  // Set initial state of contact and getting data from local storage
  const [contact, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  // Save data to local storage
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);

  // Add contact
  const addContact = (data) => {
    console.log(data, "From App.js");
    setContacts([...contact, { id: uuid4(), data }]);
  };

  // Remove contact
  const removeContact = (id) => {
    const updatedContact = contact.filter((contact) => contact.id !== id);
    setContacts(updatedContact);
  };
  return (
    <div>
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contact={contact} removeContact={removeContact} />
    </div>
  );
};

export default App;
