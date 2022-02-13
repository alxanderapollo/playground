import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="container">
      {/* row of columns, colmns are stacked and created under each row */}
      <div
        style={{ gap: "20px" }}
        className="d-flex flex-row justify-content-center"
      >
        <div className="d-flex flex-column">
          row1
          <div>col1</div>
          <div>col1</div>
          <div>col1</div>
        </div>
        <div>
          row2
          <div className="d-flex flex-column">
            <div>col2</div>
            <div>col2</div>
            <div>col2</div>
          </div>
        </div>
        <div className="d-flex flex-column">
          row3
          <div>col3</div>
          <div>col3</div>
          <div>col3</div>
        </div>
      </div>
      {/* columns with rows, newly created rows are made to the right of the columns */}
      <div style={{ gap: "20px" }} className="d-flex flex-column  ">
        <div className="d-flex flex-row">
          col1
          <div>row1</div>
          <div>row2</div>
          <div>row3</div>
        </div>
        <div className="d-flex flex-row">
          col2
          <div>row1</div>
          <div>row2</div>
          <div>row3</div>
        </div>
        <div className="d-flex flex-row">
          col3
          <div>row1</div>
          <div>row2</div>
          <div>row3</div>
        </div>
      </div>

      {/* <div className="d-flex flex-row">
        <div className="w-25">Alez was here</div>
        <div className="w-25">Alez was here</div>
      </div> */}
    </div>
  );
}

export default App;
