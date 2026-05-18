import React, { useState } from "react";

import Boot from "./src/boot/boot";
import LobbyView from "./src/scripts/lobbyViewScript";

export default function App() {
  const [bootDone, setBootDone] = useState(false);

  if (!bootDone) {
    return <Boot onFinish={() => setBootDone(true)} />;
  }

  return (
    <LobbyView
      onSignIn={() => console.log("Sign In pressed")}
      onGuest={() => console.log("Continue as Guest pressed")}
      onFinish={(profile) => {
          console.log("Onboarding complete:", profile);
      }}
    />
  );
}