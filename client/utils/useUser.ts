// import { supabase } from "@/supabase";
// import { useEffect, useState } from "react";
// import { Session } from "@supabase/gotrue-js/src/lib/types";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/store";

// export const useUser = () => {
//   const [loading, setLoading] = useState(true);
//   const [id, setId] = useState(null);
//   const [email, setEmail] = useState(null);

//   const session = useSelector((state: RootState) => state.auth);

//   useEffect(() => {
//     getProfile();
//   }, [session]);

//   const getProfile = async () => {
//     try {
//       setLoading(true);
//       const { user } = session;

//       console.log("aaa", user);

//       // let { data, status, error } = await supabase.from("users").select("*");

//       // let { data, error, status } = await supabase.from("users").select();
//       // .eq("id", user.id)
//       // .single();

//       if (error && status !== 406) {
//         throw error;
//       }

//       if (data) {
//         setId(data.id);
//         setEmail(data.email);

//         console.log("iiiii", id, email);

//         return data;
//       }
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };
// };
