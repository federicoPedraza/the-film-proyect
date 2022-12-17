import { FC } from "react";
import { Outlet } from "react-router-dom";

const OnboardingLayout: FC<{}> = () => {
  return <h2>Layout
      <Outlet />
  </h2>;
};
export default OnboardingLayout