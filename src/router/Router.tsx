import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../components/pages/Home"
import { About } from "../components/pages/About"
import { Project } from "../components/pages/Project"


const homeUrl = process.env.PUBLIC_URL;

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={ homeUrl + "/home" } element={<Home></Home>}>
                </Route>
                <Route path={ homeUrl + "/about" } element={<About></About>}>
                </Route>
                <Route path={ homeUrl + "/project" } element={<Project></Project>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router