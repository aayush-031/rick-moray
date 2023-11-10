import React from "react";

const FilterComponents = ({ updateState, updatePageNumber, values, name }) => {

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
          {name}
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
            {values.map((item, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`{name}-${index}`}
                  className="form-check-input"
                  name="{name}"
                  value={item}
                  onChange={(e) => {
                    updateState(e.target.value);
                    updatePageNumber(1);
                  }}
                />
                <label htmlFor={`{name}-${index}`} className="form-check-label">
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

export default FilterComponents;
