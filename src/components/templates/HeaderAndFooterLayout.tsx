import { Header } from "../organisms/layout/Header"
import { Footer } from "../organisms/layout/Footer"

export const HeaderAndFooterLayout = (props) => {
    const { children } = props
    return(
        <>
            <Header></Header>
            { children }
            <Footer></Footer>
        </>
    )
}