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
    console.log();

    // harap tampilkan : "test1, dan test2" didalam console log
    console.log();
    console.log();
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
