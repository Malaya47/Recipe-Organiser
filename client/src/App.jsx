import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      {/* search bar */}
      <section className="container">
        <div className="input-group input-group-sm mb-3 w-50">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Search by recipe name..."
          />
        </div>
      </section>

      <h2 className="container">All Recipes:</h2>

      <Card />
    </>
  );
}

export default App;
