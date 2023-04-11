import React from "react";
import { ProductBox } from "../../components/Box/Product-box";
import { ProductHeader } from "../../components/Products-header";
import { UseFetchContext } from "../../hooks/UseFetchContext";
import { Navbar } from "../../components/Navbar";

export function Home() {
  const { items } = UseFetchContext();

  console.log(items);
  return (
    <>
      <Navbar pageTitle="Wypożyczalnia rowerów" goToPage="/home"></Navbar>
      <ProductHeader></ProductHeader>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <ProductBox {...item} />
        </React.Fragment>
      ))}
    </>
  );
}
