import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/пше" element={<GamePage />} />
            <Route path="/profile" element={<ProfilePage />} />
        </Routes>
    );
}

export default App;
