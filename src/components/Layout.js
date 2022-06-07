import React, { useState } from "react";
import { Container, Stack } from "react-bootstrap";
import "../App.css";
import CreateKeys from "./CreateKeys";
import CreateObjective from "./CreateObjective";

function Layout() {
  //for modal
  const [showObjective, setShowObjective] = useState(false);
  const [showKeys, setShowKeys] = useState(false);

  const [objective, setObjective] = useState("");
  const [period, setPeriod] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const [id, setId] = useState("");
  const [heading, setHeading] = useState("");

  const [data, setData] = useState([
    {
      id: 1,
      objective: "Become insanely rich",
      period: "Q1-2022, Q2-2022",
      keyData: [
        {
          title: "Spend less money",
          date: "may 31,2022 4:14pm",
        },
        {
          title: "Become insanely rish",
          date: "Jun 2, 2022 3:16pm",
        },
        {
          title: "Become insanely rish",
          date: "Jun 2, 2022 3:16pm",
        },
        {
          title: "Become insanely rish",
          date: "Jun 3, 2022 5:00pm",
        },
      ],
    },
    {
      id: 2,
      objective: "Become very fast in 100m",
      period: "Q3-2022",
      keyData: [
        {
          title: "Train hard",
          date: "May 31, 2022 4:14pm",
        },
      ],
    },
    {
      id: 3,
      objective: "A new objective",
      period: "Q2-2022",
      keyData: [],
    },
  ]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    let obj = {
      id: data.length + 1,
      objective,
      period,
      keyData: [],
    };
    data.push(obj);
    setObjective("");
    setPeriod("");
    setShowObjective(false);
  };

  const onKeyResultClick = (e) => {
    e.preventDefault();
    let obj = {
      title,
      date,
    };
    data[id].keyData.push(obj);
    setTitle("");
    setDate("");
    setShowKeys(false);
  };

  return (
    <Container className="px-5">
      <CreateObjective
        setShowObjective={setShowObjective}
        showObjective={showObjective}
        onFormSubmit={onFormSubmit}
        objective={objective}
        setObjective={setObjective}
        period={period}
        setPeriod={setPeriod}
      />
      <br />
      {data.map((item, index) => {
        return (
          <Container key={index}>
            <Stack direction="horizontal" gap={3}>
              <h5 className="layout-heading">{item.objective}</h5>
              <h6 className="ms-auto">{item.period}</h6>
            </Stack>
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
              <table class="table mb-0 ">
                <tbody>
                  {item.keyData?.map((ele) => (
                    <tr>
                      <td style={{ width: "50%" }}>{ele.title}</td>
                      <td style={{ width: "50%" }}>{ele.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <CreateKeys
              date={date}
              setDate={setDate}
              setId={setId}
              index={index}
              showKeys={showKeys}
              setShowKeys={setShowKeys}
              item={item}
              title={title}
              setTitle={setTitle}
              onKeyResultClick={onKeyResultClick}
              setHeading={setHeading}
              heading={heading}
            />
            <hr />
          </Container>
        );
      })}
    </Container>
  );
}

export default Layout;
