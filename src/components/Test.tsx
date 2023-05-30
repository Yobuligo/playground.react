import React from "react";
import { useStore } from "../App";

const Test: React.FC = () => {
  const [store] = useStore();
  return (
    <>
      <div>{store.firstname}</div>
      <div>{store.lastname}</div>
    </>
  );
};

export default React.memo(Test);
