// import React, { useState, useEffect } from "react";

// export default function index() {
//   const [posts, setPosts] = useState([]); 

//   useEffect(() => {
//     fetch("")
//       .then((res) => res.json())
//       .then((data) => {
//          setPosts(data)
//       })
//   }, []);

//   return (
//     <div>
//       {posts?.map((p) => {
//         return <p key={p.id}>{p.title}</p>;
//       })}
//     </div>
//   );
// }

//TODO: consumo de una api  en react usando el metdo .then