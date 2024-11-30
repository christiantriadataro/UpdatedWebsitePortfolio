import {RouterProvider} from "react-router";
import router from "./routes/RouteIndex.tsx";

export default function App() {
    return (
        <RouterProvider router={router}/>
    )
}