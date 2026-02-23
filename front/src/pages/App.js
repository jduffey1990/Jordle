// App.js
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import WakeUpScreen from "../components/WakeUpScreen";
import { pingBackend } from "../support/Api";
import NotFound from "../support/NotFound";
import Game from "./Game";

function App() {
  const [isAwake, setIsAwake] = useState(false);

  useEffect(() => {
    pingBackend()
      .then(() => {
        if (window.__wakeUpReady) {
          window.__wakeUpReady();
        } else {
          setIsAwake(true);
        }
      })
      .catch((error) => {
        console.error("Error pinging backend:", error);
        // Proceed even if ping fails — don't leave users stuck
        if (window.__wakeUpReady) {
          window.__wakeUpReady();
        } else {
          setIsAwake(true);
        }
      });
  }, []);

  return (
    <>
      {!isAwake && <WakeUpScreen onReady={() => setIsAwake(true)} />}
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;


