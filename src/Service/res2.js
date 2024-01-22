import res1 from "../assets/img/res1.jpeg";
import Banner from "../components/Banner";
const Res2 = () => {
  return (
    <div>
      <h1 className="text-center">Our Service </h1>
      <img
        className="w-[100%] p-8"
        src={res1}
        alt="slider"
        height={100}
        width={100}
      />
      <h2 className="text-center">
        Policies and Technology for Interoperability and Burden Reduction
      </h2>
      <p>
        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
        ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
        vulputate cursus a sit amet mauris.
        <br />
        <br />
        The CMS Advancing Interoperability and Improving Prior Authorization
        Processes proposed rule (CMS-0057-P) is now available in the Federal
        Register and open for public comment. This proposed rule builds on the
        policies finalized in the CMS Interoperability and Patient Access final
        rule (CMS-9115-F) published May 2020 and policies introduced in the CMS
        Interoperability proposed rule (CMS-9123-P) published December 2020,
        which we are withdrawing in this proposed rule. The newly proposed rule
        considers stakeholder feedback and includes Medicare Advantage plans.
      </p>
    </div>
  );
};
export default Res2;
