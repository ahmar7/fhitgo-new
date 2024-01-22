import res from "../assets/img/res.jpeg";
const Res1 = () => {
  return (
    <div>
      <h1 className="text-center">Our Service </h1>
      <img
        className="w-[100%] p-8"
        src={res}
        alt="slider"
        height={100}
        width={100}
      />
      <h2 className="text-center">
        Patient Access Application Programming Interface
      </h2>
      <p>
        In order to better facilitate coordination of care, and support movement
        toward value-based payment models, we are proposing to require impacted
        payers to build and maintain a Provider Access API to share patient data
        with in-network providers with whom the patient has a treatment
        relationship. We are proposing that they make patient claims and
        encounter data (excluding cost information), data elements identified in
        the United States Core Data for Interoperability (USCDI) version 1, and
        prior authorization requests and decisions available to in-network
        providers beginning January 1, 2026.
      </p>
    </div>
  );
};
export default Res1;
