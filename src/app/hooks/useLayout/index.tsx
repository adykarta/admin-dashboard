import MainLayout from "@components/templates/MainLayout";
import { FC } from "react";

const withLayout = (Component: FC) => {
  const WrappedComponent = () => (
    <MainLayout>
      <Component />
    </MainLayout>
  );

  return WrappedComponent;
};

export default withLayout;
