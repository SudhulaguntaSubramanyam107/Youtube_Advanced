import { useSelector } from "react-redux"
import Buttonlist from "./ButtonList"
import Manicontainer from "./Maincontainer"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"
import { isThemeDark } from "../utils/themeslice"

const Body = ()=>{
    const isOpenMenu = useSelector(store=>store.app.isOpenMenu) 
    const isDark = useSelector(store=>store.theme.isDark)
    return (
        <div className={`grid grid-cols-12 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
            {isOpenMenu && (<div className={`col-span-2 shadow-lg bg-gray-50 min-h-screen ${isDark ? "bg-gray-900 text-white" : "bg-gray-50"}`}>
            <Sidebar />
            </div>)}
            <div className="col-span-10">
            <Outlet/>
            </div>
        </div>

    )
}
export default Body
