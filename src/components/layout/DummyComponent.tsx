import {Outlet} from "react-router";


const DummyComponent = ({text}: {text: string}) => (
    <div className={text}>
        <Outlet />
    </div>
)

export default DummyComponent