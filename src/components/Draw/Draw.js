import { Fragment, useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import "./Draw.css"
import { exportComponentAsJPEG } from "react-component-export-image";

const Draw = () => {
  const [brushRadius, setBrushRadius] = useState(3);
  const [lazyRadius, setLazyRadius] = useState(1);
  // const [hideUI, setHideUI] = useState(true);
  const refCanvas = useRef();

  const clearCanvasHandle = () => {
    if (refCanvas.current) {
      refCanvas.current.clear();
    }
  };
  const undoCanvasHandle = () => {
    if (refCanvas.current) {
      refCanvas.current.undo();
    }
  };

  // const hideUIHandle = () => {
  //   setHideUI(!hideUI);
  // };

  return (
    <Fragment>
      <label
        style={{
          marginRight: "1rem",
        }}
      >
        Brush-Radius:
      </label>
      <input
        type="number"
        value={brushRadius}
        onChange={(e) => setBrushRadius(parseInt(e.target.value, 3))}
      />

      <label
        style={{
          margin: "0rem 1rem 0rem 1rem",
        }}
      >
        Lazy-Radius:
      </label>
      <input
        type="number"
        value={lazyRadius}
        onChange={(e) => setLazyRadius(parseInt(e.target.value, 10))}
      />
      
      <button
        onClick={undoCanvasHandle}
        className="btn"
        style={{
          margin: "2rem",
        }}
      >
        Undo
      </button>
      <button
        onClick={clearCanvasHandle}
        className="btn"
        style={{
          marginRight: "2rem",
        }}
      >
        Clear
      </button>
      {/* <button
        onClick={hideUIHandle}
        className="btn"
        style={{
          marginRight: "2rem",
        }}
      >
        UI Element
      </button> */}
      <button
        onClick={() => exportComponentAsJPEG(refCanvas, { fileName: "result" })}
        className="btn"
        style={{
          marginRight: "2rem",
        }}
      >
        Download
      </button>

      <div className="canvas">
        <CanvasDraw
          // hideInterface={hideUI}
          lazyRadius={lazyRadius}
          brushRadius={brushRadius}
          hideGrid
          canvasWidth="1484px"
          canvasHeight="500px"
          ref={refCanvas}
          brushColor="black"
        />
      </div>
    </Fragment>
  );
};

export default Draw;
