import { Outlet } from "react-router";

import AppMenu from "@/components/navigation/AppMenu";

import "./MainLayout.css";

function MainLayout() {
    return (
        <>
            <header className="main-header">
                <div className="main-header__inner">
                    <span className="main-header__title">Crocodile Maze</span>
                    <AppMenu />
                </div>
            </header>

            <main className="main-content">
                <Outlet />
            </main>
        </>
    );
}

export default MainLayout;
