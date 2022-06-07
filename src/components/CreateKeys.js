import React from "react";
import { Button, Stack, Modal, Form } from "react-bootstrap";
import "../App.css";

function CreateKeys(props) {
  const {
    date,
    setDate,
    title,
    setTitle,
    setId,
    index,
    showKeys,
    setShowKeys,
    item,
    onKeyResultClick,
    setHeading,
    heading,
  } = props;
  return (
    <>
      <Stack direction="horizontal" gap={3} className="mt-2">
        <Button
          style={{
            border: ".5px solid rgb(0, 0, 94)",
            color: "rgb(0, 0, 94)",
          }}
          variant="outline-light"
          size="sm"
          className="ms-auto"
          onClick={() => {
            setHeading(item.objective);
            setId(index);
            setShowKeys(true);
          }}
        >
          + Key result
        </Button>
      </Stack>
      <Modal show={showKeys} onHide={() => setShowKeys(false)}>
        <Modal.Body>
          <h3 className="layout-heading">{heading}</h3>
          <Form className="p-4">
            <Form.Group className="mb-4">
              <Form.Label>
                What will show that you achieved this objective?
              </Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Period</Form.Label>
              <Form.Control
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="What period does this apply to?"
              />
            </Form.Group>
            <Button
              variant="info"
              type="submit"
              className="text-light mb-4"
              size="sm"
              onClick={onKeyResultClick}
            >
              Create Key result
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateKeys;
