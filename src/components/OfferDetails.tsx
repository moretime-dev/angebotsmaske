import { useState, useEffect, useMemo } from "react";

const OfferDetails: React.FC<{ onChange: any }> = ({ onChange }) => {
  // states for all form fields
  const [company1, setCompany1] = useState("");
  const [company2, setCompany2] = useState("");
  const [company3, setCompany3] = useState("");
  const [companyStreet, setCompanyStreet] = useState("");
  const [companyZip, setCompanyZip] = useState("");
  const [companyCity, setCompanyCity] = useState("");
  const [dateOut, setDateOut] = useState("");
  const [totalValue, setTotalValue] = useState(0);
  const [additionalDiscount, setAdditionalDiscount] = useState(0);
  const [objectDiscount, setObjectDiscount] = useState(0);
  const [objectDiscountValue, setObjectDiscountValue] = useState(0);
  const [energyCostSupplement, setEnergyCostSupplement] = useState(0);
  const [energyCostSupplementValue, setEnergyCostSupplementValue] = useState(0);
  const [offerNumber, setOfferNumber] = useState("");
  const [customerOrderNumber, setCustomerOrderNumber] = useState("");
  const [memo, setMemo] = useState("");
  const [text, setText] = useState("");
  const [contributionMargin, setContributionMargin] = useState(0);
  const [additionalWarranty, setAdditionalWarranty] = useState(0);
  const [additionalWarrantyCost, setAdditionalWarrantyCost] = useState(0);
  const [customerDiscount1, setCustomerDiscount1] = useState(2.5);
  const [customerDiscount2, setCustomerDiscount2] = useState(0);
  const [factoryDiscountValue, setFactoryDiscountValue] = useState(0);
  const [prospectSuccess, setProspectSuccess] = useState("");
  const [cashDiscount, setCashDiscount] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [outboundFreight, setOutboundFreight] = useState(0);
  const [offerPositions, setOfferPositions] = useState(false);
  const [offerSettings, setOfferSettings] = useState(false);

  // state for object to send to parent component
  const [offerDetails, setOfferDetails] = useState({});

  // form fields handlers
  const onCompany1ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany1(e.target.value);
  };

  const onCompany2ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany2(e.target.value);
  };

  const onCompany3ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany3(e.target.value);
  };

  const onCompanyStreetChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompanyStreet(e.target.value);
  };

  const onCompanyZipCodeChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompanyZip(e.target.value);
  };

  const onCompanyCityChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompanyCity(e.target.value);
  };

  const ondateOutChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateOut(e.target.value);
  };

  const onTotalValueChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTotalValue(+e.target.value);
  };

  const onAdditionalDiscountChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAdditionalDiscount(+e.target.value);
  };

  const onObjectDiscountChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setObjectDiscount(+e.target.value);
  };

  const onObjectDiscountValueChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setObjectDiscountValue(+e.target.value);
  };

  const onEnergyCostSupplementChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnergyCostSupplement(+e.target.value);
  };

  const onEnergyCostSupplementValueChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnergyCostSupplementValue(+e.target.value);
  };

  const onOfferNumberChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOfferNumber(e.target.value);
  };

  const onCustomerOrderNumberChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomerOrderNumber(e.target.value);
  };

  const onMemoChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  };

  const onTextChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const onContributionMarginChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContributionMargin(+e.target.value);
  };

  const onAdditionalWarrantyChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAdditionalWarranty(+e.target.value);
  };

  const onAdditionalWarrantyCostChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAdditionalWarrantyCost(+e.target.value);
  };

  const onCustomerDiscount1ChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomerDiscount1(+e.target.value);
  };

  const onCustomerDiscount2ChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomerDiscount2(+e.target.value);
  };

  const onFactoryDiscountValueChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFactoryDiscountValue(+e.target.value);
  };

  const onProspectSuccessChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProspectSuccess(e.target.value);
  };

  const onCashDiscountChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCashDiscount(+e.target.value);
  };

  const onBonusChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBonus(+e.target.value);
  };

  const onOutboundFreightChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOutboundFreight(+e.target.value);
  };

  const onOfferPositionsChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOfferPositions(e.target.checked);
  };

  const onOfferSettingsChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOfferSettings(e.target.checked);
  };

  // passing the offerDetails object to the parent component
  useEffect(() => {
    onChange(offerDetails);
  }, [offerDetails, onChange]);

  //setting offerDetails with useMemo to prevent infinite re-rendering
  useMemo(() => {
    setOfferDetails({
      company1,
      company2,
      company3,
      companyStreet,
      companyZip,
      companyCity,
      dateOut,
      totalValue,
      additionalDiscount,
      objectDiscount,
      objectDiscountValue,
      energyCostSupplement,
      energyCostSupplementValue,
      offerNumber,
      customerOrderNumber,
      memo,
      text,
      contributionMargin,
      additionalWarranty,
      additionalWarrantyCost,
      customerDiscount1,
      customerDiscount2,
      factoryDiscountValue,
      prospectSuccess,
      cashDiscount,
      bonus,
      outboundFreight,
      offerPositions,
      offerSettings,
    });
  }, [
    additionalDiscount,
    additionalWarranty,
    additionalWarrantyCost,
    bonus,
    cashDiscount,
    company1,
    company2,
    company3,
    companyCity,
    companyStreet,
    companyZip,
    contributionMargin,
    customerDiscount1,
    customerDiscount2,
    customerOrderNumber,
    dateOut,
    energyCostSupplement,
    energyCostSupplementValue,
    factoryDiscountValue,
    memo,
    objectDiscount,
    objectDiscountValue,
    offerNumber,
    offerPositions,
    offerSettings,
    outboundFreight,
    prospectSuccess,
    text,
    totalValue,
  ]);

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
              value={companyStreet}
              onChange={onCompanyStreetChangeHandler}
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
              value={companyZip}
              onChange={onCompanyZipCodeChangeHandler}
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
              value={companyCity}
              onChange={onCompanyCityChangeHandler}
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
              value={dateOut}
              onChange={ondateOutChangeHandler}
            />{" "}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="totalValue">Gesamtwert *</label>
            <input
              id="totalValue"
              type="number"
              value={totalValue}
              onChange={onTotalValueChangeHandler}
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
              value={additionalDiscount}
              onChange={onAdditionalDiscountChangeHandler}
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
              value={objectDiscount}
              onChange={onObjectDiscountChangeHandler}
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
              value={objectDiscountValue}
              onChange={onObjectDiscountValueChangeHandler}
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
              value={energyCostSupplement}
              onChange={onEnergyCostSupplementChangeHandler}
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
              value={energyCostSupplementValue}
              onChange={onEnergyCostSupplementValueChangeHandler}
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
              value={offerNumber}
              onChange={onOfferNumberChangeHandler}
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
              value={customerOrderNumber}
              onChange={onCustomerOrderNumberChangeHandler}
            />{" "}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="memo">Memo</label>
            <textarea id="memo" value={memo} onChange={onMemoChangeHandler} />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="text">Einleitungstext</label>
            <textarea id="text" value={text} onChange={onTextChangeHandler} />
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
              value={contributionMargin}
              onChange={onContributionMarginChangeHandler}
              required
            />{" "}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15vw" }}
          >
            <label htmlFor="additionalWarranty">Garantieverlängerung *</label>
            <select
              id="additionalWarranty"
              value={additionalWarranty}
              onChange={onAdditionalWarrantyChangeHandler}
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
              value={additionalWarrantyCost}
              onChange={onAdditionalWarrantyCostChangeHandler}
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
              value={customerDiscount1}
              onChange={onCustomerDiscount1ChangeHandler}
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
              value={customerDiscount2}
              onChange={onCustomerDiscount2ChangeHandler}
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
              value={factoryDiscountValue}
              onChange={onFactoryDiscountValueChangeHandler}
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
              value={prospectSuccess}
              onChange={onProspectSuccessChangeHandler}
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
              value={cashDiscount}
              onChange={onCashDiscountChangeHandler}
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
              value={bonus}
              onChange={onBonusChangeHandler}
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
              value={outboundFreight}
              onChange={onOutboundFreightChangeHandler}
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
              checked={offerPositions}
              onChange={onOfferPositionsChangeHandler}
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
              checked={offerSettings}
              onChange={onOfferSettingsChangeHandler}
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
