import React from "react";
import Post from "./pages/post/post";

function App() {
  return (
    <div className={'container'}>
      <h2>Posts</h2>
      <hr/>
      <div>
          <Post/>
      </div>
    </div>
  );
}
export default App;
