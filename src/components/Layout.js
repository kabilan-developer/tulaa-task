import React, { useState } from "react";
import { Container, Stack } from "react-bootstrap";
import "../App.css";
import CreateKeys from "./CreateKeys";
import CreateObjective from "./CreateObjective";

function Layout() {
  //for modal
  const [showObjectiveModal, setShowObjectiveModal]     = useState(false);
  const [showKeyResultModal, setShowKeyResultModal]     = useState(false);

  //input state for creating objective
  const [objectiveTitleInput, setObjectiveTitleInput]   = useState("");
  const [objectivePeriodInput, setObjectivePeriodInput] = useState("");

  //input state for creating key results
  const [keyTitleInput, setKeyTitleInput]               = useState("");
  const [keyPeriodInput, setKeyPeriodInput]             = useState("");

  //capturing index & heading
  const [clickedId, setClickedId]                       = useState("");
  const [modalHeading, setModalHeading]                 = useState("");

  //initial state 
  const [data, setData]                                 = useState([
    {
      id                   : 1,
      objectiveTitle       : "Become insanely rich",
      objectivePeriod      : "Q1-2022, Q2-2022",
      keyResult            : [
          {
            keyTitle       : "Spend less money",
            keyPeriod      : "may 31,2022 4:14pm",
          },
          {
            keyTitle       : "Become insanely rish",
            keyPeriod      : "Jun 2, 2022 3:16pm",
          },
          {
            keyTitle       : "Become insanely rish",
            keyPeriod      : "Jun 2, 2022 3:16pm",
          },
          {
            keyTitle       : "Become insanely rish",
            keyPeriod      : "Jun 3, 2022 5:00pm",
          },
        ],
    },
    {
      id                   : 2,
      objectiveTitle       : "Become very fast in 100m",
      objectivePeriod      : "Q3-2022",
      keyResult            : [
          {
            keyTitle       : "Train hard",
            keyPeriod      : "May 31, 2022 4:14pm",
          },
        ],
    },
    {
      id                   : 3,
      objectiveTitle       : "A new objective",
      objectivePeriod      : "Q2-2022",
      keyResult            : [],
    },
  ]);

  //function for creating new objective
  const createNewObjective = (e) => {
    e.preventDefault();
    let newObjData = {
      id               : data.length + 1,
      objectiveTitle   : objectiveTitleInput,                
      objectivePeriod  : objectivePeriodInput,                   
      keyResult        : [],
    };
    data.push(newObjData);
    setObjectiveTitleInput("");
    setObjectivePeriodInput("");
    setShowObjectiveModal(false);    //closing the modal
  };

   //function for creating new key result
  const createNewKeyResult = (e) => {
    e.preventDefault();
    let newKeyData = {
      keyTitle  : keyTitleInput,                    
      keyPeriod : keyPeriodInput,                     
    };
    data[clickedId].keyResult.push(newKeyData);
    setKeyTitleInput("");
    setKeyPeriodInput("");
    setShowKeyResultModal(false);         //closing the modal
  };

  return (
    <Container className="px-5">

      <CreateObjective
        showObjectiveModal       = {showObjectiveModal}
        setShowObjectiveModal    = {setShowObjectiveModal}
        objectiveTitleInput      = {objectiveTitleInput}
        setObjectiveTitleInput   = {setObjectiveTitleInput}
        objectivePeriodInput     = {objectivePeriodInput}
        setObjectivePeriodInput  = {setObjectivePeriodInput}
        createNewObjective       = {createNewObjective}
      />

      <br />

      {data.map((item, index) => {
        return (
          <Container key={index}>
            <Stack direction="horizontal" gap={3}>
              <h5 className="layout-modalHeading">{item.objectiveTitle}</h5>
              <h6 className="ms-auto">{item.objectivePeriod}</h6>
            </Stack>
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
              <table class="table mb-0 ">
                <tbody>
                  {item.keyResult?.map((key) => (
                    <tr>
                      <td style={{ width: "50%" }}>{key.keyTitle}</td>
                      <td style={{ width: "50%" }}>{key.keyPeriod}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <CreateKeys
              showKeyResultModal       = {showKeyResultModal}
              setShowKeyResultModal    = {setShowKeyResultModal}
              keyTitleInput            = {keyTitleInput}
              setKeyTitleInput         = {setKeyTitleInput}
              keyPeriodInput           = {keyPeriodInput}
              setKeyPeriodInput        = {setKeyPeriodInput}
              createNewKeyResult       = {createNewKeyResult}
              setClickedId             = {setClickedId}
              setModalHeading          = {setModalHeading}
              modalHeading             = {modalHeading}
              index                    = {index}
              item                     = {item}
            />

            <hr />
          </Container>
        );
      })}

    </Container>
  );
}

export default Layout;
