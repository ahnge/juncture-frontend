import React, { useState } from "react";

const Table = ({
  canditates,
  setCanditates,
  prev,
  next,
  handlePaginate,
  canditatesIdsToSend,
  setCanditatesIdsToSend,
}) => {
  // states

  const handleCheckBoxClick = (e) => {
    const applicantId = e.target.dataset.id;
    if (e.target.checked) {
      const ids = [...canditatesIdsToSend, applicantId];
      setCanditatesIdsToSend(ids);
    } else {
      const ids = [...canditatesIdsToSend].filter((id) => id !== applicantId);
      setCanditatesIdsToSend(ids);
    }
  };

  const offerOrRejectOne = (id, type) => {
    // getting the canditate
    const canditate = canditates.filter((c) => c.id == id)[0];
    const objToSend = {
      name: [canditate.applicant],
      to_email: [canditate.email],
      company: "Juncture",
      email_type: type,
    };
    const url = "https://heinhtetnyi.pythonanywhere.com/juncture/send-mail/";
    // sending obj to backend
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objToSend),
    })
      .then(console.log(`${type} sent successfully`))
      .catch((err) => console.log(err.message));

    // removing canditate from ui after offer or reject
    const newCanditates = [...canditates].filter((c) => c.id !== canditate.id);
    setCanditates(newCanditates);
  };

  const offerAllOrRejectAll = (type) => {
    let names = [];
    let emails = [];
    let ids = [];
    for (let i = 0; i < canditatesIdsToSend.length; i++) {
      const id = canditatesIdsToSend[i];
      canditates.map((c) => {
        if (c.id == id) {
          names.push(c.applicant);
          emails.push(c.email);
          ids.push(c.id);
        }
      });
    }

    const objToSend = {
      name: names,
      to_email: emails,
      company: "Juncture",
      email_type: type,
    };

    const url = "https://heinhtetnyi.pythonanywhere.com/juncture/send-mail/";
    // sending obj to backend
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objToSend),
    })
      .then(console.log(`${type} to all sent successfully`))
      .catch((err) => console.log(err.message));

    // removing canditates from ui after offer or reject
    let ca = [...canditates];
    for (let i = 0; i < ids.length; i++) {
      let id = ids[i];
      const newCanditates = ca.filter((c) => c.id !== id);
      ca = newCanditates;
    }
    setCanditates(ca);

    // remove offerall and rejectall btns
    setCanditatesIdsToSend([]);
  };

  return (
    <div className=" max-w-6xl mx-auto">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Skills</th>
              <th>Work Experience</th>
              <th>Education</th>
              <th>
                {canditatesIdsToSend.length ? (
                  <button
                    className="btn btn-success"
                    onClick={() => offerAllOrRejectAll("offer")}
                  >
                    Offer All
                  </button>
                ) : (
                  ""
                )}
              </th>
              <th>
                {canditatesIdsToSend.length ? (
                  <button
                    className="btn btn-error"
                    onClick={() => offerAllOrRejectAll("reject")}
                  >
                    Reject All
                  </button>
                ) : (
                  ""
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {canditates.map((canditate) => {
              return (
                <tr key={canditate.id}>
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        data-id={canditate.id}
                        onClick={(e) => handleCheckBoxClick(e)}
                      />
                    </label>
                  </th>
                  <td>
                    <div className=" font-bold capitalize">
                      {canditate.applicant}
                    </div>
                  </td>
                  <td>
                    <div className=" font-normal">{canditate.email}</div>
                  </td>
                  <td>
                    <div>{canditate.location}</div>
                  </td>
                  <td>
                    <ul>
                      {canditate.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <p>{canditate.exp}</p>
                  </td>
                  <th>
                    <p>{canditate.edu_lvl}</p>
                  </th>
                  <th>
                    <button
                      className="btn btn-success"
                      onClick={() => offerOrRejectOne(canditate.id, "offer")}
                    >
                      Offer
                    </button>
                  </th>
                  <th>
                    <button
                      className="btn btn-error"
                      onClick={() => offerOrRejectOne(canditate.id, "reject")}
                    >
                      Reject
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex mt-10 space-x-4 justify-center">
          <button
            className={`btn ${!prev ? "btn-disabled" : ""}`}
            onClick={() => handlePaginate(prev)}
          >
            Previous
          </button>
          <button
            className={`btn ${!next ? "btn-disabled" : ""}`}
            onClick={() => handlePaginate(next)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
