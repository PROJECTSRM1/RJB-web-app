import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import LayoutComponent from "../../components/Layout/Layout";

export const SecureRoutes = () => {
    
    return <Routes>
            <Route path="/" element={<LayoutComponent />}>
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
    </Routes>
}