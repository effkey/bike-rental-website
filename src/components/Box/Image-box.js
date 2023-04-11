import { Button, Card, Carousel, Table } from "react-bootstrap";
import { Navigate, NavLink } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
export function ImageBox(props) {
  const listItems = props.morephoto?.map((item) => (
    <Carousel.Item className="d-flex justify-content-center">
      <img
        width={"700px"}
        height={"100px"}
        key={item.id}
        src={item}
        alt="rower"
      />
    </Carousel.Item>
  ));

  return (
    <>
      <Card className="mx-auto max-w-7xl bg-white shadow-sm mt-6">
        <Card.Body className="flex items-center">
          <Table>
            <tbody>
              <tr>
                <th>
                  <Carousel
                    fade
                    className="w-70"
                    variant="dark"
                    key={listItems}
                  >
                    {listItems}
                  </Carousel>
                </th>
              </tr>
            </tbody>
          </Table>
          <div className="ml-20 justify-between">
            <Button variant="danger">
              <Navigate to={`/details/${props.id}`} as={NavLink}>
                Wróć do szczegółów
              </Navigate>
            </Button>

            <div className="mt-10">
              {/* todo routing do szczegółów */}
              <Button variant="danger">
                <Navigate to={`/home`} as={NavLink}>
                  Wróć do sklepu
                </Navigate>
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

ImageBox.propTypes = {
  id: PropTypes.number.isRequired,
  morephoto: PropTypes.arrayOf(PropTypes.string),
};
