import res2 from "../assets/img/res2.jpeg";
import Banner from "../components/Banner";
const Res3 = () => {
  return (
    <div>
      <h1 className="text-center">Our Service </h1>
      <img
        className="w-[100%] p-8"
        src={res2}
        alt="slider"
        height={100}
        width={100}
      />
      <h2 className="text-center">Payer-to-Payer Data Exchange</h2>
      <p>
        In December 2021, CMS announced enforcement discretion for this policy
        until identified implementation challenges could be addressed in future
        rule making;
        <br />
        <br />
        In an effort to ensure a patient’s data can follow them throughout their
        health care journey, we are proposing to require that payers would
        exchange patient data when a patient changes health plans with the
        patient’s permission. Those data would include claims and encounter data
        (excluding cost information), data elements identified in the USCDI
        version 1, and prior authorization requests and decisions. For all
        impacted payers, we are considering a proposal that would require this
        exchange only if the patient opts in to data sharing.
      </p>
    </div>
  );
};
export default Res3;
