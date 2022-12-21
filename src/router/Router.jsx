import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../components/pages/Home"
import { About } from "../components/pages/About"
import { Project } from "../components/pages/Project"


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/home`} element={<Home></Home>}>
                </Route>
                <Route path={`${process.env.PUBLIC_URL}/about`} element={<About></About>}>
                </Route>
                <Route path={`${process.env.PUBLIC_URL}/project`} element={<Project></Project>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router