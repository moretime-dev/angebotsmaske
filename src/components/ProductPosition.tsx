import React, { useState, useEffect } from "react";

import { products } from "../data/products";

export interface Product {
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

const ProductPosition = () => {
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const [currentProductNumber, setCurrentProductNumber] = useState("");
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

  const onProductNumberSearchHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const current = products.filter((product) =>
      product.productNumber.toLowerCase().includes(event.currentTarget.value)
    );
    setCurrentProductNumber(event.currentTarget.value);
    setCurrentProducts(current);
  };

  const onShortTextChangeHandler = () => {};

  useEffect(() => {
    const current = products.find(
      (product) => product.productNumber === currentProductNumber
    );

    setCurrentProduct(current!);
    console.log(current);
  }, [currentProductNumber]);

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <section
        style={{
          display: "flex",
          width: "90vw",
          margin: "0 auto 2em auto",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "5vw" }}>
          <label htmlFor="posNr">PosNr</label>
          <input id="posNr" type="text" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "5vw" }}>
          <label htmlFor="posIndex">PosIdx</label>
          <input id="posIndex" type="text" required />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "10vw" }}
        >
          <label htmlFor="posType">Alt./Evt.</label>
          <select
            name="posType"
            id="posType"
            style={{ height: "1.6em" }}
            required
          >
            <option value="std">Std.</option>
            <option value="alt">Alt.</option>
            <option value="txt">Text</option>
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
          <input id="posQty" type="number" />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "35vw" }}
        >
          <label htmlFor="productText1">Produkttext 1</label>
          <input
            id="productText1"
            type="text"
            defaultValue={currentProduct && currentProduct.shortText}
            onChange={onShortTextChangeHandler}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "35vw" }}
        >
          <label htmlFor="positionText">Positionstext</label>
          <input
            id="positionText"
            type="text"
            defaultValue={currentProduct && currentProduct.productName}
            onChange={onShortTextChangeHandler}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "10vw" }}
        >
          <label htmlFor="listPrice">Listenpreis</label>
          <input
            id="listPrice"
            type="number"
            defaultValue={
              currentProduct &&
              currentProduct.currentListPrice.toFixed(2).toString()
            }
            onChange={onShortTextChangeHandler}
          />
        </div>
      </section>{" "}
      <section
        style={{ display: "flex", width: "70vw", margin: "0 auto 2em auto" }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "5vw" }}>
          <label htmlFor="discount">Rabatt</label>
          <input id="discount" type="number" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "5vw" }}>
          <label htmlFor="contributionMargin">Marge</label>
          <input id="contributionMargin" type="number" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "5vw" }}>
          <label htmlFor="netPrice">Netto</label>
          <input id="netPrice" type="number" />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "10vw" }}
        >
          <label htmlFor="totalPrice">Ges.-Preis</label>
          <input id="totalPrice" type="number" />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "10vw" }}
        >
          <label htmlFor="costOfSale">COS</label>
          <input id="costOfSale" type="number" />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "10vw" }}
        >
          <label htmlFor="m3BusinessArea">m3BusinessArea</label>
          <input id="m3BusinessArea" type="text" />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "10vw" }}
        >
          <label htmlFor="m3ProductClass">m3ProductClass</label>
          <input id="m3ProductClass" type="text" />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "10vw" }}
        >
          <label htmlFor="m3ProductGroup">m3ProductGroup</label>
          <input id="m3ProductGroup" type="text" />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "10vw" }}
        >
          <label htmlFor="m3Status">m3Status</label>
          <input id="m3Status" type="number" />
        </div>{" "}
      </section>{" "}
    </form>
  );
};

export default ProductPosition;
