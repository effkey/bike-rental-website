import { useParams } from "react-router-dom";
import { ProductHeader } from "../../components/Products-header";
import { UseFetchContext } from "../../hooks/UseFetchContext";
import React from "react";
import { Navbar } from "../../components/Navbar";
import { ImageBox } from "../../components/Box/Image-box";

export function Images() {
  // wykorzystanie dwóch zmiennych właściwości routingu
  const { useFetchForDetails } = UseFetchContext();
  const { id } = useParams();
  let product = useFetchForDetails(id);

  return (
    <>
      <Navbar pageTitle="Więcej zdjęć" goToPage={`/details/${id}`}></Navbar>
      <ProductHeader></ProductHeader>
      <ImageBox {...product}></ImageBox>
    </>
  );
}
