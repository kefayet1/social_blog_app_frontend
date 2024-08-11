// import { useEffect, useState } from "react";

// const UseFetch = async ({ url, urlData }) => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const response = await fetch(url, {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(urlData),
//                 });

//                 if (!response.ok) {
//                     throw new Error(
//                         `Error fetching data: ${response.statusText}`
//                     );
//                 }

//                 const data = await response.json();
//                 setData(data);
//             } catch (error) {
//                 setError(error); 
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [url]);

//     console.log(data)

//     return { data, error, loading };
// };

// export default UseFetch;
