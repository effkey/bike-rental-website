import { Formularz } from "../../components/Form";
import { Navbar } from "../../components/Navbar";
import { ProductHeader } from "../../components/Products-header";

export function AddProduct() {
  return (
    <>
      <Navbar pageTitle="Dodaj produkt" goToPage={`/home`}></Navbar>
      <ProductHeader></ProductHeader>
      <Formularz></Formularz>
    </>
  );
}
