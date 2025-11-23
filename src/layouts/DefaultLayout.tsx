import { Outlet } from "react-router-dom";
import { Header } from "@/components";

const DefaultLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default DefaultLayout
