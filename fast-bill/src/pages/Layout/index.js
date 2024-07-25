import { Button } from "antd-mobile"
import { Outlet } from "react-router"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getBillList } from "@/store/modules/billStore"


const Layout = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBillList())
    },[dispatch])

    return <div>
    <Outlet/>
    Layout
    <Button color="primary">test global</Button>
    </div>
}

export default Layout