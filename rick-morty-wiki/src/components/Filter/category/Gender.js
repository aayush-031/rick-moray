import React from "react";

const Gender = ({ updateGender, updatePageNumber }) => {
  const genders = ["female", "male", "genderless", "unknown"];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="form-check">
            {genders.map((item, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`gender-${index}`}
                  className="form-check-input"
                  name="gender"
                  value={item}
                  onChange={(e) => {
                    updateGender(e.target.value);
                    updatePageNumber(1);
                  }}
                />
                <label htmlFor={`gender-${index}`} className="form-check-label">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gender;
