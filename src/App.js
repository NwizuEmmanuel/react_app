import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import pic from "./assets/pic1.jpg";

const App = () => {
  return (
    <>
      <Container fluid className="mt-2">
        <img src={pic} alt="pic" style={{ height: 500, width: 300 }} />
        <Button variant="primary">primary</Button>
      </Container>
    </>
  );
};

export default App;
