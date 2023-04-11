import { useParams } from "react-router-dom";
import { ProductHeader } from "../../components/Products-header";
import { UseFetchContext } from "../../hooks/UseFetchContext";
import { Navbar } from "../../components/Navbar";
import { DetailsProductBox } from "../../components/Box/Details-product-box";
import React from "react";

export function Details() {
  // // Routing z parametrem
  const { useFetchForDetails } = UseFetchContext();

  // use params()
  let { id } = useParams();
  id = Number(id);

  let product = useFetchForDetails(id);

  return (
    <>
      <Navbar pageTitle="Szczegóły" goToPage={`/home`}></Navbar>
      <ProductHeader></ProductHeader>
      <DetailsProductBox {...product} />
    </>
  );
}
