import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1696453424673-8b05ed67ce0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww",
      color: "skyblue",
      intro: "",
      tag: "Satisfied",
      num: "1",
    },
    {
      img: "https://images.unsplash.com/photo-1753903023869-216c69094f5c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lcmNoYW50JTIwbmF2eXxlbnwwfHwwfHx8MA%3D%3D",
      color: "red",
      intro: "",
      tag: "Underserved",
      num: "2",
    },
    {
      img: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D",
      color: "yellow",
      intro: "",
      tag: "Underbanked",
      num: "3",
    },
    {
      img: "https://images.unsplash.com/photo-1772339164169-4391cd6f0096?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "green",
      intro: "",
      tag: "Unreserved",
      num: "4",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
