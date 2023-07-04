import {Routes, Route} from "react-router-dom"
import Chats from "./Pages/Chats"
import Homepage from "./Pages/Homepage"
import "./App.css"



function App() {
  return (
    <div className="App">
        <Routes>
          <Route
            index
            element={<Homepage/>}
          /> 
          <Route
          path="/chats" 
          element={<Chats/>}
          />
        </Routes>
        {/* <Button colorScheme="blue" >Button</Button> */}
    </div>
  );
}

export default App;
