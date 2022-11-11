// import React from "react";
// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import { Home, Login, Registration } from "./pages";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Registration />} />
//       <Route path="/test" element={<></>} />
//       <Route path="*" element={<> Error 404 Page Not Found </>} />
//     </Routes>
//   );
// }

import "./App.css";

function App() {
  const DummyData = [
    {
      id: 1,
      type: "hobi",
      listType: ["makan", "tidur", "ngoding"],
    },
    {
      id: 2,
      type: "warna",
      listType: ["merah", "kuning", "hijau"],
    },
    {
      id: 3,
      type: "merk handphone",
      listType: ["iphone", "samsung", "xiaomi"],
    },
  ];

  const DummyData2 = [[[["test1", ["test2"]]]]];

  const handleShowConsole = () => {
    // harap tampilkan : "hobi saya ngoding" didalam console log
    console.log(DummyData);

    // harap tampilkan : "test1, dan test2" didalam console log
    console.log(DummyData2[0][0][0][0]);
    console.log(DummyData2[0][0][0][1][0]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={handleShowConsole}
          style={{ width: 400, height: 50, marginTop: 20 }}
        >
          Click here
        </button>
      </header>
    </div>
  );
}

export default App;
