import React, { useState, useEffect, useMemo } from "react";

import { products } from "../data/products";

// interfaces for the form
interface Product {
  id: string;
  productName: string;
  productNumber: string;
  costOfSale: number;
  currentListPrice: number;
  shortText: string;
  m3BusinessArea: string;
  m3ProductClass: string;
  m3ProductGroup: string;
  m3ProductStatus: number;
}

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

const ProductPosition: React.FC<{ onChange: any }> = ({ onChange }) => {
  // Handle Product Filtering and set current product
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const [currentProductNumber, setCurrentProductNumber] = useState("");
  const [currentProductId, setCurrentProductId] = useState("");
  const [currentProduct, setCurrentProduct] = useState<Product>({
    id: "",
    productName: "",
    productNumber: "",
    costOfSale: 0,
    currentListPrice: 0,
    shortText: "",
    m3BusinessArea: "",
    m3ProductClass: "",
    m3ProductGroup: "",
    m3ProductStatus: 0,
  });

  const [posProduct, setPosProduct] = useState<ProductPositionToSubmit | {}>(
    {}
  );

  //TEST THE PASSING FUNC

  // Get filtered products from products array
  const onProductNumberSearchHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const currentProducts = products.filter((product) =>
      product.productNumber.toLowerCase().includes(event.currentTarget.value)
    );
    setCurrentProductNumber(event.currentTarget.value);
    setCurrentProducts(currentProducts);
  };

  // Get values from form fields and set changes

  // form fields state
  const [posNr, setPosNr] = useState("");
  const [posIdx, setPosIdx] = useState("");
  const [posType, setPosType] = useState("Std.");
  const [posQty, setPosQty] = useState("");
  const [posProductText1, setPosProductText1] = useState("");
  const [posPositionText, setPosPositionText] = useState("");
  const [posListPrice, setPosListPrice] = useState(0);
  const [posDiscount, setPosDiscount] = useState(10);
  const [posMargin, setPosMargin] = useState(10);
  const [posNetPrice, setPosNetPrice] = useState(50);
  const [posTotalPrice, setPosTotalPrice] = useState(90);
  const [posCOS, setPosCOS] = useState(0);
  const [posBusinessArea, setPosBusinessArea] = useState("");
  const [posProductClass, setPosProductClass] = useState("");
  const [posProductGroup, setPosProductGroup] = useState("");
  const [posProductStatus, setPosProductStatus] = useState(0);

  // Get current product from products array and set states for product info
  useEffect(() => {
    const current =
      products.find(
        (product) => product.productNumber === currentProductNumber
      ) || currentProduct;

    setCurrentProduct(current!);
    setCurrentProductId(current?.id);
    setPosProductText1(current?.shortText);
    setPosPositionText(current?.productName);
    setPosListPrice(current?.currentListPrice);
    setPosCOS(current?.costOfSale);
    setPosBusinessArea(current?.m3BusinessArea);
    setPosProductClass(current?.m3ProductClass);
    setPosProductGroup(current?.m3ProductGroup);
    setPosProductStatus(current?.m3ProductStatus);

    onChange(posProduct);
  }, [currentProductNumber, currentProduct, onChange, posProduct, posIdx]);

  //setting position product with useMemo to prevent infinite re-rendering

  useMemo(() => {
    setPosProduct({
      productId: currentProductId,
      productNumber: currentProductNumber,
      posProductText1: posProductText1,
      posPositionText: posPositionText,
      posListPrice: posListPrice,
      posCOS: posCOS,
      posBusinessArea: posBusinessArea,
      posProductClass: posProductClass,
      posProductGroup: posProductGroup,
      posProductStatus: posProductStatus,
      posNr: +posNr,
      posIdx: +posIdx,
      posType: posType,
      posQty: +posQty,
      posDiscount: posDiscount,
      posMargin: posMargin,
      posNetPrice: posNetPrice,
      posTotalPrice: posTotalPrice,
    });
  }, [
    currentProductId,
    currentProductNumber,
    posBusinessArea,
    posCOS,
    posDiscount,
    posIdx,
    posListPrice,
    posMargin,
    posNetPrice,
    posNr,
    posPositionText,
    posProductClass,
    posProductGroup,
    posProductStatus,
    posProductText1,
    posQty,
    posTotalPrice,
    posType,
  ]);

  // form fields handlers
  const onPosNumberChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setPosNr(event.currentTarget.value);
  };

  const onPosIndexChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setPosIdx(event.currentTarget.value);
  };

  const onPosTypeChangeHandler = (
    event: React.FormEvent<HTMLSelectElement>
  ) => {
    setPosType(event.currentTarget.value);
  };

  const onPosQuantityChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    if (+event.currentTarget.value < 1) {
      return;
    } else {
      setPosQty(event.currentTarget.value);
    }
  };

  const onPosProductText1ChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setPosProductText1(event.currentTarget.value);
  };

  const onPosPositionTextChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setPosPositionText(event.currentTarget.value);
  };

  const onPosListPriceChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setPosListPrice(+event.currentTarget.value);
  };

  const onPosDiscountChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setPosDiscount(+event.currentTarget.value);
  };

  const onPosMarginChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setPosMargin(+event.currentTarget.value);
  };

  const onPosNetPriceChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setPosNetPrice(+event.currentTarget.value);
  };

  const onPosTotalPriceChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setPosTotalPrice(+event.currentTarget.value);
  };

  const onPosCOSChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPosCOS(+event.currentTarget.value);
  };

  const onPosBusinessAreaChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setPosBusinessArea(event.currentTarget.value);
  };

  const onPosProductClassChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setPosProductClass(event.currentTarget.value);
  };

  const onPosProductGroupChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setPosProductGroup(event.currentTarget.value);
  };

  const onPosProductStatusChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setPosProductStatus(+event.currentTarget.value);
  };

  // Prepare Position Product For Submit

  // render form for product position
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      {/** _______________________________ */}
      {/** First Line Of Product Position */}
      <section
        style={{
          display: "flex",
          width: "90vw",
          margin: "0 auto 2em auto",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "5vw" }}>
          <label htmlFor="posNr">PosNr</label>
          <input
            id="posNr"
            type="number"
            value={posNr}
            onChange={onPosNumberChangeHandler}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "5vw" }}>
          <label htmlFor="posIndex">PosIdx *</label>
          <input
            id="posIndex"
            type="number"
            required
            value={posIdx}
            onChange={onPosIndexChangeHandler}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "10vw" }}
        >
          <label htmlFor="posType">Alt./Evt. *</label>
          <select
            name="posType"
            id="posType"
            style={{ height: "1.6em" }}
            required
            value={posType}
            onChange={onPosTypeChangeHandler}
          >
            <option value="Std.">Std.</option>
            <option value="Alt.">Alt.</option>
            <option value="Text">Text</option>
          </select>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "15vw" }}
        >
          <label htmlFor="productList">ArtikelNr </label>
          <input
            type="text"
            list="products"
            id="productList"
            onChange={onProductNumberSearchHandler}
          />
          <datalist id="products">
            {currentProducts.map((currentProduct) => {
              return (
                <option
                  key={currentProduct.id}
                  value={currentProduct.productNumber}
                >
                  {currentProduct.productNumber}
                </option>
              );
            })}
          </datalist>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "5vw" }}>
          <label htmlFor="posQty">Anzahl</label>
          <input
            id="posQty"
            type="number"
            value={posQty}
            onChange={onPosQuantityChangeHandler}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "35vw" }}
        >
          <label htmlFor="productText1">Produkttext 1</label>
          <input
            id="productText1"
            type="text"
            value={posProductText1}
            onChange={onPosProductText1ChangeHandler}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "35vw" }}
        >
          <label htmlFor="positionText">Positionstext</label>
          <input
            id="positionText"
            type="text"
            value={posPositionText}
            onChange={onPosPositionTextChangeHandler}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "10vw" }}
        >
          <label htmlFor="listPrice">Listenpreis</label>
          <input
            id="listPrice"
            type="number"
            value={posListPrice.toString()}
            onChange={onPosListPriceChangeHandler}
          />
        </div>
      </section>{" "}
      {/** _______________________________ */}
      {/** Second Line Of Product Position */}
      <section
        style={{ display: "flex", width: "90vw", margin: "0 auto 2em auto" }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "6vw" }}>
          <label htmlFor="discount">Rabatt %</label>
          <input
            id="discount"
            type="number"
            value={posDiscount}
            onChange={onPosDiscountChangeHandler}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "6vw" }}>
          <label htmlFor="contributionMargin">Marge %</label>
          <input
            id="contributionMargin"
            type="number"
            value={posMargin}
            onChange={onPosMarginChangeHandler}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "10vw" }}
        >
          <label htmlFor="netPrice">Netto</label>
          <input
            id="netPrice"
            type="number"
            value={posNetPrice}
            onChange={onPosNetPriceChangeHandler}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "10vw" }}
        >
          <label htmlFor="totalPrice">Ges.-Preis</label>
          <input
            id="totalPrice"
            type="number"
            value={posTotalPrice}
            onChange={onPosTotalPriceChangeHandler}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "10vw" }}
        >
          <label htmlFor="costOfSale">COS</label>
          <input
            id="costOfSale"
            type="number"
            value={posCOS.toString()}
            onChange={onPosCOSChangeHandler}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "10vw" }}
        >
          <label htmlFor="m3BusinessArea">m3BusinessArea</label>
          <input
            id="m3BusinessArea"
            type="text"
            value={posBusinessArea}
            onChange={onPosBusinessAreaChangeHandler}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "10vw" }}
        >
          <label htmlFor="m3ProductClass">m3ProductClass</label>
          <input
            id="m3ProductClass"
            type="text"
            value={posProductClass}
            onChange={onPosProductClassChangeHandler}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "15vw" }}
        >
          <label htmlFor="m3ProductGroup">m3ProductGroup</label>
          <input
            id="m3ProductGroup"
            type="text"
            value={posProductGroup}
            onChange={onPosProductGroupChangeHandler}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "10vw" }}
        >
          <label htmlFor="m3Status">m3Status</label>
          <input
            id="m3Status"
            type="number"
            value={posProductStatus}
            onChange={onPosProductStatusChangeHandler}
          />
        </div>{" "}
      </section>{" "}
    </form>
  );
};

export default ProductPosition;
