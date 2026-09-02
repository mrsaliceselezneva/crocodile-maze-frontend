import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import ProfilePage from "./pages/ProfilePage";
import MainLayout from "./layouts/MainLayout";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="game" element={<GamePage />} />
                <Route path="profile" element={<ProfilePage />} />
            </Route>
        </Routes>
    );
}

export default App;
