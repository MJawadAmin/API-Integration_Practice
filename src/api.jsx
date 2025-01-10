export const getPosts = async () => 
    {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {method: "GET",
    });
       
    return await res.json()
};
 
// export const getPosts = async () => {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "GET",
//       });
//       if (!res.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return await res.json();
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//       throw error;
//     }
//   };
  