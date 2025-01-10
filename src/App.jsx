import React, { useState, useEffect } from "react";
import { getPosts } from "./api";
import PostCard from "./PostCard";

const App = () => {
  const [data , setData]= useState(null);
  useEffect (()=>{
    getPosts().then(posts=>
      setData(posts)
  )}),[]
 

  return (
    <div>
      {data ? (data.map((e)=> 
        <PostCard title={e.title} body ={e.body}/>
)) : (
  <div className=" bg-black text-5xl text-red-900 text-center">Loading...</div>
  )}
    </div>
  );
};


export default App;

// import React, { useState, useEffect } from "react";
// import { getPosts } from "./api";
// import PostCard from "./PostCard";

// const App = () => {
//   const [data, setData] = useState(null); // Correct useState syntax

//   useEffect(() => {
//     getPosts()
//       .then((posts) => {
//         console.log(posts); // Logging the fetched data
//         setData(posts); // Updating the state with fetched data
//       })
//       .catch((error) => console.error("Error fetching posts:", error)); // Handle errors
//   }, []); // Dependency array

//   return (
//     <div>
//       {data ? (
//         data.map((post) => (
//           <PostCard key={post.id} title={post.title} body={post.body} />
//         ))
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// };

// export default App;
