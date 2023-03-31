// @flow 
import * as React from 'react';

interface ContainerProps {
    children: React.ReactNode;
}


const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      {/* {props  } */}
    </div>
  );
};

export default Container;