import Lock from "../../assets/assets/lock.png"
import"./Nav.css"
const Nav = () => {
  return (
    <div>
        <div className="Top border-b-1 border-white mx-12">
        <nav className="pb-2">
                <img src={Lock} alt="" />
            </nav>
        </div>
    </div>
  )
}

export default Nav