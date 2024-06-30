import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="h-screen w-full max-w-7xl md:mx-14 xl:mx-auto sm:mx-8 mx-3">
      {children}
    </div>
  );
};

export default Container;
