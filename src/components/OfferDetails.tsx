import { useState, useEffect, useMemo } from "react";

const OfferDetails: React.FC<{ onChange: any }> = ({ onChange }) => {
  // states for all form fields
  const [company1, setCompany1] = useState("");
  const [company2, setCompany2] = useState("");
  const [company3, setCompany3] = useState("");

  // state for object to send to parent component
  const [offerDetails, setOfferDetails] = useState({});

  const onCompany1ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany1(e.target.value);
  };

  const onCompany2ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany2(e.target.value);
  };

  const onCompany3ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany3(e.target.value);
  };

  useEffect(() => {
    onChange(offerDetails);
  }, [offerDetails, onChange]);

  useMemo(() => {
    setOfferDetails({
      company1,
      company2,
      company3,
    });
  }, [company1, company2, company3]);

  return (
    <form
      style={{ display: "flex", flexDirection: "column", marginBottom: "5em" }}
    >
      <section
        style={{
          display: "flex",
          width: "90vw",
          margin: "0 auto 2em auto",
        }}
      >
        {" "}
        <section id="companyContainer">
          <div
            style={{ display: "flex", flexDirection: "column", width: "10vw" }}
          >
            <label htmlFor="company1">Firma</label>
            <input
              id="company1"
              type="text"
              value={company1}
              onChange={onCompany1ChangeHandler}
              required
            />{" "}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "10vw" }}
          >
            <label htmlFor="company2">Firma (optional)</label>
            <input
              id="company2"
              type="text"
              value={company2}
              onChange={onCompany2ChangeHandler}
            />{" "}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "10vw" }}
          >
            <label htmlFor="company3">Firma (optional)</label>
            <input
              id="company3"
              type="text"
              value={company3}
              onChange={onCompany3ChangeHandler}
            />
          </div>
        </section>
      </section>
    </form>
  );
};

export default OfferDetails;
