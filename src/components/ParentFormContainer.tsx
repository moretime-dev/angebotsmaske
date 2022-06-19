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

const ParentFormContainer = () => {
  const [offerDetails, setOfferDetails] = useState({});
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
  const onOfferDetailsFormHandler = (data: {}) => {
    setOfferDetails(data);
  };

  const onCompleteProductPositionHandler = (data: ProductPositionToSubmit) => {
    setProductPositions(data);
  };

  //form validation
  useEffect(() => {
    if (productPositions.posIdx !== 0) {
      setFormNotValidated(false);
    } else {
      setFormNotValidated(true);
    }
  }, [productPositions]);

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
        Save
      </button>
    </div>
  );
};

export default ParentFormContainer;
