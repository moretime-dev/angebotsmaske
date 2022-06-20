import { useState, useEffect, useMemo, useCallback } from "react";

import OfferDetails from "./OfferDetails";
import ProductPosition from "./ProductPosition";

export interface ProductPositionToSubmit {
  productId: string;
  posNr: number;
  posIdx: number;
  productNumber: string;
  posType: string;
  posQty: number;
  posProductText1: string;
  posPositionText: string;
  posListPrice: number;
  posDiscount: number;
  posMargin: number;
  posNetPrice: number;
  posTotalPrice: number;
  posCOS: number;
  posBusinessArea: string;
  posProductClass: string;
  posProductGroup: string;
  posProductStatus: number;
}

interface OfferDetailsType {
  company1: string;
  company2: string;
  company3: string;
  companyStreet: string;
  companyZip: string;
  companyCity: string;
  dateOut: string;
  totalValue: number;
  additionalDiscount: number;
  objectDiscount: number;
  objectDiscountValue: number;
  energyCostSupplement: number;
  energyCostSupplementValue: number;
  offerNumber: string;
  customerOrderNumber: string;
  memo: string;
  text: string;
  contributionMargin: number;
  additionalWarranty: string;
  additionalWarrantyCost: number;
  customerDiscount1: number;
  customerDiscount2: number;
  factoryDiscountValue: number;
  prospectSuccess: string;
  cashDiscount: number;
  bonus: number;
  outboundFreight: number;
  offerPositions: boolean;
  offerSettings: boolean;
}

const ParentFormContainer = () => {
  const [offerDetails, setOfferDetails] = useState<OfferDetailsType>({
    company1: "",
    company2: "",
    company3: "",
    companyStreet: "",
    companyZip: "",
    companyCity: "",
    dateOut: "",
    totalValue: 0,
    additionalDiscount: 0,
    objectDiscount: 0,
    objectDiscountValue: 0,
    energyCostSupplement: 0,
    energyCostSupplementValue: 0,
    offerNumber: "",
    customerOrderNumber: "",
    memo: "",
    text: "",
    contributionMargin: 0,
    additionalWarranty: "0",
    additionalWarrantyCost: 0,
    customerDiscount1: 2.5,
    customerDiscount2: 0,
    factoryDiscountValue: 0,
    prospectSuccess: "",
    cashDiscount: 0,
    bonus: 0,
    outboundFreight: 0,
    offerPositions: false,
    offerSettings: false,
  });
  const [productPositions, setProductPositions] =
    useState<ProductPositionToSubmit>({
      productId: "",
      posNr: 0,
      posIdx: 0,
      productNumber: "",
      posType: "",
      posQty: 0,
      posProductText1: "",
      posPositionText: "",
      posListPrice: 0,
      posDiscount: 0,
      posMargin: 0,
      posNetPrice: 0,
      posTotalPrice: 0,
      posCOS: 0,
      posBusinessArea: "",
      posProductClass: "",
      posProductGroup: "",
      posProductStatus: 0,
    });

  const [formNotValidated, setFormNotValidated] = useState(true);

  // gather data from form components
  const onOfferDetailsFormHandler = (data: OfferDetailsType) => {
    setOfferDetails(data);
  };

  const onCompleteProductPositionHandler = (data: ProductPositionToSubmit) => {
    setProductPositions(data);
  };

  //form validation
  useEffect(() => {
    if (
      productPositions.posIdx !== 0 &&
      offerDetails.company1 !== "" &&
      offerDetails.companyStreet !== "" &&
      offerDetails.companyZip !== "" &&
      offerDetails.companyCity !== "" &&
      offerDetails.totalValue >= 0 &&
      offerDetails.offerNumber !== "" &&
      offerDetails.additionalDiscount >= 0 &&
      offerDetails.objectDiscount >= 0 &&
      offerDetails.objectDiscountValue >= 0 &&
      offerDetails.energyCostSupplement >= 0 &&
      offerDetails.energyCostSupplementValue >= 0 &&
      offerDetails.offerNumber !== "" &&
      offerDetails.contributionMargin >= 0 &&
      offerDetails.additionalWarranty !== "" &&
      offerDetails.additionalWarrantyCost >= 0 &&
      offerDetails.customerDiscount1 >= 0 &&
      offerDetails.customerDiscount2 >= 0 &&
      offerDetails.prospectSuccess !== "" &&
      offerDetails.cashDiscount >= 0 &&
      offerDetails.bonus >= 0 &&
      offerDetails.outboundFreight! >= 0
      // &&
      // offerDetails.offerPositions === true &&
      // offerDetails.offerSettings === true
    ) {
      setFormNotValidated(false);
    } else {
      setFormNotValidated(true);
    }
  }, [
    offerDetails.additionalDiscount,
    offerDetails.additionalWarranty,
    offerDetails.additionalWarrantyCost,
    offerDetails.bonus,
    offerDetails.cashDiscount,
    offerDetails.company1,
    offerDetails.companyCity,
    offerDetails.companyStreet,
    offerDetails.companyZip,
    offerDetails.contributionMargin,
    offerDetails.customerDiscount1,
    offerDetails.customerDiscount2,
    offerDetails.energyCostSupplement,
    offerDetails.energyCostSupplementValue,
    offerDetails.objectDiscount,
    offerDetails.objectDiscountValue,
    offerDetails.offerNumber,
    offerDetails.outboundFreight,
    offerDetails.prospectSuccess,
    offerDetails.totalValue,
    productPositions,
  ]);

  // save data to database/file
  const onSaveHandler = useCallback(
    (event: React.FormEvent<HTMLButtonElement>) => {
      event.preventDefault();

      const downloadFile = () => {
        const fileName = "angebotsdaten";
        const json = JSON.stringify({ offerDetails, productPositions });
        const blob = new Blob([json], { type: "application/json" });
        const href = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      downloadFile();
    },

    [offerDetails, productPositions]
  );

  return (
    <div>
      <OfferDetails onChange={onOfferDetailsFormHandler} />
      <ProductPosition onChange={onCompleteProductPositionHandler} />
      <p>
        {" "}
        <span>* = Pflichtfelder</span>
      </p>

      <button onClick={onSaveHandler} disabled={formNotValidated}>
        Speichern
      </button>
    </div>
  );
};

export default ParentFormContainer;
