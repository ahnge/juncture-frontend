import React from "react";

const Table = ({
  canditates,
  prev,
  next,
  handlePaginate,
  namesToSend,
  emailsToSend,
  setNamesToSend,
  setEmailsToSend,
}) => {
  const handleCheckBoxClick = (e) => {
    const applicantName = e.target.dataset.name;
    const applicantEmail = e.target.dataset.email;
    if (e.target.checked) {
      const names = [...namesToSend, applicantName];
      setNamesToSend(names);
    } else {
      const names = [...namesToSend].filter((n) => n !== applicantName);
      setNamesToSend(names);
    }
  };

  const offerOrRejectOne = (name, email, type) => {
    const objToSend = {
      name: [name],
      to_email: [email],
      company: "Juncture",
      email_type: type,
    };
    console.log(objToSend);
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
                {namesToSend.length ? (
                  <button className="btn btn-success">Offer All</button>
                ) : (
                  ""
                )}
              </th>
              <th>
                {namesToSend.length ? (
                  <button className="btn btn-error">Reject All</button>
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
                        data-name={canditate.applicant}
                        data-email={canditate.email}
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
                      onClick={() =>
                        offerOrRejectOne(
                          canditate.applicant,
                          canditate.email,
                          "offer"
                        )
                      }
                    >
                      Offer
                    </button>
                  </th>
                  <th>
                    <button
                      className="btn btn-error"
                      onClick={() =>
                        offerOrRejectOne(
                          canditate.applicant,
                          canditate.email,
                          "reject"
                        )
                      }
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
