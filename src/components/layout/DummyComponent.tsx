import { Outlet } from "@tanstack/react-router";

const DummyComponent = ({ text }: { text: string }) => (
  <div className={text}>
    <Outlet />
  </div>
);

export default DummyComponent;
