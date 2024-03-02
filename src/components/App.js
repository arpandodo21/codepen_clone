import React, { useEffect, useState } from "react";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState();
  const [css, setCss] = useState();
  const [js, setJs] = useState();
  const [src, setSrc] = useState(`<htm><body></body></html>`);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(`<html><style>${css}</style><body>${html}</body><script>${js}</script></html>`);
    },250);

    return () => clearTimeout(timeout)
  },[html,css,js]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor language="js" displayName="JS" value={js} onChange={setJs} />
      </div>
      <div className="pane">
        <iframe
          srcDoc={src}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
