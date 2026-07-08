import { useEffect, useState } from "react";

function App() {
    const [backendMessage, setBackendMessage] = useState("");

    useEffect(() => {
        fetch("/api/health/")
            .then((response) => response.json())
            .then((data) => {
                setBackendMessage(data.message);
            });
    }, []);

    return (
        <main>
            <h1>Crocodile Maze</h1>
            <p>Образовательная игра-лабиринт по задачам Codeforces</p>

            <hr />

            <p>Ответ backend:</p>
            <strong>{backendMessage}</strong>
        </main>
    );
}

export default App;
