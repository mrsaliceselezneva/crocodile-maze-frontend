import { useEffect, useState } from "react";

function App() {
    const [gameInfo, setGameInfo] = useState(null);

    useEffect(() => {
        fetch("/api/game-info/")
            .then((response) => response.json())
            .then((data) => {
                setGameInfo(data);
            });
    }, []);

    return (
        <main>
            <h1>Crocodile Maze</h1>
            <p>Образовательная игра-лабиринт по задачам Codeforces</p>

            <hr />

            <p>Ответ backend:</p>
            <div>
                <strong>{gameInfo?.name}</strong>
                <div>{gameInfo?.message}</div>
            </div>
        </main>
    );
}

export default App;
