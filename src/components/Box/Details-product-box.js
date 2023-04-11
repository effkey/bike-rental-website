import { Button, Card, Nav, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useShoppingCart } from "../../context/ShoppingCartContext";

export function DetailsProductBox(props) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(props.id);

  return (
    <>
      <Card className="mx-auto max-w-7xl bg-white shadow-sm mt-6">
        <Card.Body className="flex items-center">
          <Table>
            <tbody>
              <tr className="flex justify-between">
                <th className="flex items-center justify-between">
                  <Card.Img src={props.image} alt="rower" />
                </th>
                <th>
                  <div className="ml-20 mb-5 text-base ">
                    <Card.Title> {props.title}</Card.Title>
                    <Card.Text> {props.description}</Card.Text>
                    <Card.Text> Typ : {props.type} </Card.Text>
                    <Card.Text> Ilość: {props.productCount}</Card.Text>
                  </div>
                </th>
                <th>
                  <div className="ml-20 justify-between">
                    <div className="mb-5">
                      {/* todo routing do szczegółów */}
                      <Button variant="danger">
                        <Nav.Link
                          to={`/details/${props.id}/images`}
                          as={NavLink}
                        >
                          Zobacz więcej zdjęć
                        </Nav.Link>
                      </Button>
                    </div>
                    <div className="mb-5">
                      {/* todo routing do szczegółów */}
                      <Button variant="danger">
                        <Nav.Link to={`/home`} as={NavLink}>
                          Wróć do sklepu
                        </Nav.Link>
                      </Button>
                    </div>
                    {quantity === 0 ? (
                      <Button
                        variant="danger"
                        onClick={() => increaseCartQuantity(props.id)}
                      >
                        Dodaj do koszyka
                      </Button>
                    ) : (
                      <div
                        className="d-flex align-items-center flex-column"
                        style={{ gap: ".5rem" }}
                      >
                        <Button onClick={() => increaseCartQuantity(props.id)}>
                          +
                        </Button>

                        <div>
                          <span className="fs-3">{quantity} </span> w koszyku
                        </div>
                        <div
                          className="d-flex align-items-center justify-content-center"
                          style={{ gap: ".5rem" }}
                        >
                          <Button
                            onClick={() => decreaseCartQuantity(props.id)}
                          >
                            -
                          </Button>
                        </div>
                        <div>
                          <Button
                            onClick={() => removeFromCart(props.id)}
                            variant="danger"
                            size="sm"
                          >
                            Usuń w koszyku
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </th>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}

DetailsProductBox.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  productCount: PropTypes.number.isRequired,
};
