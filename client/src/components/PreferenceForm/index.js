import React from "react";
import Form from "react-bootstrap/Form";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

function PreferenceForm(props) {
  const { zipcode, handleInputChange, getPricePref } = props;
  return (
    <div>
      <Form
        style={{
          textAlign: "center",
          padding: "20px 50px",
          maxWidth: "350px",
          marginTop: "30px",
          backgroundColor: "white",
          margin: "auto",
          border: "1px solid black",
          borderRadius: "10px",
          boxShadow: "2px 2px 10px black"
        }}
      >
        <Form.Group controlId="formGroupZip">
          <Form.Label>Enter your zip code.</Form.Label>
          <Form.Control
            value={zipcode}
            name="zipcode"
            onChange={handleInputChange}
            type="number"
            placeholder="This field is required."
            style={{ maxWidth: "266px" }}
          />
        </Form.Group>
        <hr />
        <hr />
        <Form.Group controlId="formGroupPrice">
          <Form.Label>Select your price preference (not required).</Form.Label>
          <br />
          <ButtonGroup
            size="large"
            color="primary"
            aria-label="large outlined primary button group"
            style={{ margin: "5px" }}
          >
            <Button dataId="1" onClick={() => getPricePref(1)}>
              $
            </Button>
            <Button dataId="2" onClick={() => getPricePref(2)}>
              $$
            </Button>
            <Button dataId="3" onClick={() => getPricePref(3)}>
              $$$
            </Button>
            <Button dataId="4" onClick={() => getPricePref(4)}>
              $$$$
            </Button>
          </ButtonGroup>
        </Form.Group>
      </Form>
    </div>
  );
}

export default PreferenceForm;
