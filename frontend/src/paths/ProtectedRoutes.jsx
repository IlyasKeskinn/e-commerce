import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = ({ condition, routes = "/" }) => {
    return <div>{condition ? <Outlet /> : <Navigate replace:true to={`${routes ? routes : "/"}`} />}</div>
}