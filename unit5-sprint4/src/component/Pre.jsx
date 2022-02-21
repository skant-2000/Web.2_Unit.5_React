import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Pre() {
  const [checks, setChecks] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.currentTarget;
    let Value = type === "checkbox" ? checked : value;

    setChecks({
      ...checks,
      [name]: Value,
    });
  };

  console.log(checks)

  return (
    <div style={{ marginTop: "200px" }}>
      <div>
        <input
          type="checkbox"
          name="attendence"
          checked={checks.attendence}
          onChange={handleInputChange}
        />
        <label>Can you attend 90% of the class.</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="laptop"
          checked={checks.laptop}
          onChange={handleInputChange}
        />
        <label>Do you have a Laptop?</label>
      </div>
      <div>
        <Link to="/info"><button>Continue</button></Link>
      </div>
    </div>
  );
}
