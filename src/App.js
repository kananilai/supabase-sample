// src/App.jsx
import { useEffect, useState } from "react";
import Home from "./Home";
import Login from "./Login";
import { supabase } from "./supabase";

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const { data: session } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
      }
    );
  }, []);

  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "#F5F5F5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {session ? <Home /> : <Login />}
    </div>
  );
};

export default App;
