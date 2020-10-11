import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className='App'>
      <Contact
        name='Stéphanie'
        image='https://randomuser.me/api/portraits/women/43.jpg'
        online
      />
      <Contact
        name='Sylvie'
        image='https://randomuser.me/api/portraits/women/90.jpg'
      />
      <Contact
        name='Jean-Marc'
        image='https://randomuser.me/api/portraits/men/3.jpg'
        online
      />
    </div>
  );
}

export default App;
