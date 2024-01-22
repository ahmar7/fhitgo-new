import React from "react";
import Banner from "../components/Banner";
const Firebase = () => {
  return (
    <>
      <Banner />
      <h2 className="text-center py-8">FireBase</h2>
      <p className="px-4">
        FHIR Server with different RDBMS
        <br />
        Supports API mechanism
        <br />
        Integrate with different API Gateways
        <br />
        Supports integration with different Authentication & Authorization
        mechanisms
      </p>
    </>
  );
};
export default Firebase;
