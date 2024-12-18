
import DummyComponent from "../components/layout/DummyComponent.tsx";
import {ROUTER_TABS} from "../constants/router.tsx";
import MainLayout from "../components/layout/MainLayout.tsx";
import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/" element={<Navigate to="/home" replace/>}/>
                {ROUTER_TABS.map((tab, index) =>
                    <Route key={index} path={tab.path} element={tab.element}/>
                )}
            </Route>
            {/* Not Found Page */}
            <Route path="*" element={<Navigate to="/404" replace/>}/>
            <Route path="/not-found" element={<DummyComponent text="Not Found"/>}/>
        </>
    ), {
        future: {
            v7_fetcherPersist: true,
            v7_relativeSplatPath:
                true,
            v7_normalizeFormMethod:
                true,
            v7_partialHydration:
                true,
            v7_skipActionErrorRevalidation:
                true
        }
    }
)

export default router;