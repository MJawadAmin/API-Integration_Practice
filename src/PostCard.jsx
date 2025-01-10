// import React from 'react'

// const PostCard = (props) => {
//   return (
//     <div>
//       <h3>{props.title}</h3>
//       <p>{props.body}</p>
//     </div>
//   )
// }

// export default PostCard


import React from "react";

const PostCard = (props) => {
  return ( 
    
        <div className="border-4 w-1/2 mx-auto bg-slate-600 rounded-lg p-5 lg:px-20 ">
      <h2 className="font-bold text-xl lg:text-3xl text-red-950 p-3">{props.title}</h2>
      <p className=" text-green-400">{props.body}</p>
    </div>
   
    
  );
};

export default PostCard;
