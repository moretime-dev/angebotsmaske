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
      style={{ display: "flex", flexDirection: "column", margin: "2em auto" }}
    >
      <section
        style={{
          display: "flex",
          width: "90vw",
          margin: "0 auto 2em auto",
        }}
      >
        {" "}
        {/** _______________________________ */}
        {/** First Block Of Offer Data Area */}
        <section id="companyContainer">
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="company1">Firma *</label>
            <input
              id="company1"
              type="text"
              value={company1}
              onChange={onCompany1ChangeHandler}
              required
            />{" "}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
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
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="company3">Firma (optional)</label>
            <input
              id="company3"
              type="text"
              value={company3}
              onChange={onCompany3ChangeHandler}
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="street">Straße/Nr. *</label>
            <input
              id="street"
              type="text"
              value={company3}
              onChange={onCompany3ChangeHandler}
              required
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="postalCode">PLZ *</label>
            <input
              id="postalCode"
              type="number"
              value={company3}
              onChange={onCompany3ChangeHandler}
              required
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="city">Stadt *</label>
            <input
              id="city"
              type="text"
              value={company3}
              onChange={onCompany3ChangeHandler}
              required
            />
          </div>
        </section>
        {/** _______________________________ */}
        {/** Second Block Of Offer Data Area */}
        <section id="offerDataContainer2" style={{ paddingLeft: "1em" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "15vw",
            }}
          >
            <label htmlFor="dateOut">Ausgangsdatum</label>
            <input
              id="dateOut"
              type="date"
              value={company1}
              onChange={onCompany1ChangeHandler}
            />{" "}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="totalValue">Gesamtwert *</label>
            <input
              id="totalValue"
              type="number"
              value={company2}
              onChange={onCompany2ChangeHandler}
              required
            />{" "}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="additionalDiscount">Rabatt *</label>
            <input
              id="additionalDiscount"
              type="number"
              value={company3}
              onChange={onCompany3ChangeHandler}
              required
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="objectDiscount">Objektrabatt *</label>
            <input
              id="objectDiscount"
              type="text"
              value={company3}
              onChange={onCompany3ChangeHandler}
              required
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="objectDiscountValue">Objektrabatt Wert *</label>
            <input
              id="objectDiscountValue"
              type="number"
              value={company3}
              onChange={onCompany3ChangeHandler}
              required
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="energyCostSupplement">Energiepauschale *</label>
            <input
              id="energyCostSupplement"
              type="number"
              value={company3}
              onChange={onCompany3ChangeHandler}
              required
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="energyCostSupplementValue">
              Energiepauschale Wert *
            </label>
            <input
              id="energyCostSupplementValue"
              type="number"
              value={company3}
              onChange={onCompany3ChangeHandler}
              required
            />
          </div>
        </section>
        {/** _______________________________ */}
        {/** Third Block Of Offer Data Area */}
        <section id="offerDataContainer3" style={{ paddingLeft: "1em" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "15vw",
            }}
          >
            <label htmlFor="offerNumber">Angebotsnummer *</label>
            <input
              id="offerNumber"
              type="number"
              value={company1}
              onChange={onCompany1ChangeHandler}
              required
            />{" "}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="customerOrderNumber">Kundenreferenz</label>
            <input
              id="customerOrderNumber"
              type="text"
              value={company2}
              onChange={onCompany2ChangeHandler}
            />{" "}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="memo">Memo</label>
            <textarea
              id="memo"
              value={company3}
              // onChange={onCompany3ChangeHandler}
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="text">Einleitungstext</label>
            <textarea
              id="text"
              value={company3}
              // onChange={onCompany3ChangeHandler}
            />
          </div>
        </section>
        {/** _______________________________ */}
        {/** Fourth Block Of Offer Data Area */}
        <section id="offerDataContainer4" style={{ paddingLeft: "1em" }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="contributionMargin">Marge *</label>
            <input
              id="contributionMargin"
              type="number"
              value={company1}
              onChange={onCompany1ChangeHandler}
              required
            />{" "}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="additionalWarranty">Garantieverlängerung *</label>
            <select
              id="additionalWarranty"
              // value={company2}
              // onChange={onCompany2ChangeHandler}
              required
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="additionalWarrantyCost">
              Kosten Garantieverlängerung *
            </label>
            <input
              id="additionalWarrantyCost"
              type="text"
              value={company3}
              onChange={onCompany3ChangeHandler}
              required
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="customerDiscount1">Kundenrabatt 1 *</label>
            <input
              id="customerDiscount1"
              type="number"
              value={company3}
              onChange={onCompany3ChangeHandler}
              required
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="customerDiscount2">Kundenrabatt 2 *</label>
            <input
              id="customerDiscount2"
              type="number"
              value={company3}
              onChange={onCompany3ChangeHandler}
              required
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="factoryDiscountValue">Werksrabatt *</label>
            <input
              id="factoryDiscountValue"
              type="number"
              value={company3}
              onChange={onCompany3ChangeHandler}
              required
            />
          </div>
        </section>
        {/** _______________________________ */}
        {/** Fifth Block Of Offer Data Area */}
        <section id="offerDataContainer5" style={{ paddingLeft: "1em" }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="prospectSuccess">Erfolgsaussicht *</label>
            <input
              id="prospectSuccess"
              type="text"
              value={company1}
              onChange={onCompany1ChangeHandler}
              required
            />{" "}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="cashDiscount">Skonto *</label>
            <input
              id="cashDiscount"
              type="number"
              value={company2}
              onChange={onCompany2ChangeHandler}
              required
            />{" "}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="Bonus">Bonus *</label>
            <input
              id="Bonus"
              type="number"
              value={company3}
              onChange={onCompany3ChangeHandler}
              required
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="outboundFreight">Frachtkosten *</label>
            <input
              id="outboundFreight"
              type="text"
              value={company3}
              onChange={onCompany3ChangeHandler}
              required
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "1em",
              width: "15vw",
            }}
          >
            <input
              id="offerPositions"
              type="checkbox"
              value={company3}
              onChange={onCompany3ChangeHandler}
              required
            />{" "}
            <label htmlFor="offerPositions">offerPositions *</label>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "15vw",
            }}
          >
            <input
              id="offerSettings"
              type="checkbox"
              value={company3}
              onChange={onCompany3ChangeHandler}
              required
            />{" "}
            <label htmlFor="offerSettings">offerSettings *</label>
          </div>
        </section>
      </section>
    </form>
  );
};

export default OfferDetails;
