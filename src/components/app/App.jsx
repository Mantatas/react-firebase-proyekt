import Header from "../header/Header"
import Works from "../works/Works"
import AddWork from "../addWork/AddWork"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
    return(
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Works/>}/>
                    <Route path="/add-work" element={<AddWork/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default App