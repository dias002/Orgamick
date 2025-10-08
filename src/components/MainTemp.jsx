import {HashRouter, Routes, Route} from "react-router-dom"

function Main() {
    return (
        <main>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<div>Main</div>} />
                    <Route path="/about" element={<div>About</div>} />
                </Routes>
            </HashRouter>
        </main>
    )
}
export default Main;