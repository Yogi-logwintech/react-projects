import React from "react";
import useAxiosFetch from "./useAxiosFetch";

function Axios() {
  const {
    data: posts,
    fetchError,
    isLoading,
  } = useAxiosFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <div>
      <h2>
        Testing You can see fetched data in console
        {console.log(posts)}
        {console.log("Component is rendering ")}
      </h2>
    </div>
  );
}

export default Axios;
