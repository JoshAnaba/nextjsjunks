import Footer from "./Footer"
import Navbar from "./Navbar"


const Layout = ({ children }: any) => {
  return (
      <div id="LAYOUT_CONTENT">
        <Navbar />
        <div id="PAGE_CONTENT">
        { children }
        </div>
        <Footer />
      </div>
  
  )
}

export default Layout
