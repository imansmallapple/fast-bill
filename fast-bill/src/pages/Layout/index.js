import { Button } from "antd-mobile"
import { Outlet } from "react-router"

const Layout = () => {
    return <div>
    <Outlet/>
    Layout
    <Button color="primary">test global</Button>
    </div>
}

export default Layout