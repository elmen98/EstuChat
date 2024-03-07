import React, {Suspense, lazy}from "react";

const Cat = lazy(()=> import("../../components/Cat"));
const GeneralApp = () => {

  return (
    <>
      <Suspense fallback="Cargando...">
        <Cat/>
      </Suspense>
    </>
  );
};

export default GeneralApp;
