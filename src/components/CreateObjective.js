import React from "react";
import { Button, Stack, Modal, Form } from "react-bootstrap";
import "../App.css";

function CreateObjective(props) {
  const {
    showObjectiveModal,
    setShowObjectiveModal,
    objectiveTitleInput,
    setObjectiveTitleInput,
    objectivePeriodInput,
    setObjectivePeriodInput,
    createNewObjective,
  } = props;
  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <h1 className="layout-heading" style={{ fontWeight: "bold" }}>
          My Objectives
        </h1>
        <Button
          variant="info"
          size="sm"
          className="text-light ms-auto"
          onClick={() => setShowObjectiveModal(true)}
        >
          + objective
        </Button>
      </Stack>

      <Modal show={showObjectiveModal} onHide={() => setShowObjectiveModal(false)}>
        <Modal.Body>

          <Form className="p-4" onSubmit={createNewObjective}>
            <Form.Group className="mb-4">
              <Form.Label>Objective</Form.Label>
              <Form.Control
                type="text"
                value={objectiveTitleInput}
                onChange={(e) => setObjectiveTitleInput(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Period</Form.Label>
              <Form.Control
                type="text"
                value={objectivePeriodInput}
                onChange={(e) => setObjectivePeriodInput(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="info"
              type="submit"
              className="text-light mb-4"
              size="sm"
            >
              Create Objective
            </Button>
          </Form>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateObjective;
