import { Outlet } from "react-router"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getBillList } from "@/store/modules/billStore"
import { TabBar } from "antd-mobile"
import { useNavigate } from "react-router"
import './index.scss'
import {
    BillOutline,
    CalculatorOutline,
    AddCircleOutline,
} from 'antd-mobile-icons'
  const tabs = [
    {
      key: '/month',
      title: 'Month Bill',
      icon: <BillOutline />,
    },
    {
      key: '/new',
      title: 'New Bill',
      icon: <AddCircleOutline />,
    },
    {
      key: '/year',
      title: 'Yearly Bill',
      icon: <CalculatorOutline />
    },
  ]

const Layout = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBillList())
    },[dispatch])

    const navigate = useNavigate()
    const switchRoute = (path) =>{
        console.log(path)
        navigate(path)
    }

    return (
        <div className="Layout">
      <div className="container">
        container
        {/* 二级路由出口 */}
        <Outlet />
      </div>
      
      <div className="footer">
      <TabBar
      onChange={switchRoute}
      >
        {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
        </div>
    </div>
    )
}

export default Layout