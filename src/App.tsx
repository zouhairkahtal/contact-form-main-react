// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Form from "./components/Form";

function App() {
  return (
    <div className="font-karla w-full h-screen bg-green200 flex items-center justify-center">
      <div className="w-contactUsdevWidth   bg-white rounded-2xl ">
          <div className=" w-full h-20 flex items-center pl-10 text-2xl font-bold text-grey600">
            <h1>Contact Us</h1>
          </div>
          <Form/>
      </div>
    </div>
  );
}

export default App;
