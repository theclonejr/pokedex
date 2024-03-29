import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoutes = () => {

    const trainerName = useSelector(store => store.trainerName)

    if (trainerName.length >= 3) {
        return <Outlet />
    } else {
        return <Navigate to={'/'} />
    }

  return (
    <div>ProtectedRoutes</div>
  )
}

export default ProtectedRoutes