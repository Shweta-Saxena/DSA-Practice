import React, { useState } from "react";

const OnboardingForm = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    gender: "",
    mobileNumber: "",
    state: '',
    dob: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async(data) => {
    data.preventDefault();
    try{
     fetch('https://reqres.in/api/users',{
        method: 'POST',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(formValue)
      })

      return alert("Form Submitted Successfully");
    }catch(error){
      return error;
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <div>
            <label htmlFor="name" className="form-label">Name</label>
          </div>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            name="name"
            value={formValue.name}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <div>
            <label htmlFor="gender" className="form-label">Gender</label>
          </div>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formValue.gender === "Female"}
            onChange={handleChange}
          />
          <label htmlFor="Female" className="form-label">Female</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formValue.gender === "Male"}
            onChange={handleChange}
          />
          <label htmlFor="Male" className="form-label">Male</label>
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={formValue.gender === "Other"}
            onChange={handleChange}
          />
          <label htmlFor="Other" className="form-label">Other</label>
        </div>
        <div>
          <div>
            <label htmlFor="mobileNumber" className="form-label">Mobile No.</label>
          </div>
          <input
            type="number"
            id="mobileNumber"
            name="mobileNumber"
            value={formValue.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="state">
           State
          </label>
          <select id="state" value={formValue?.state} name="state" onChange={handleChange}>
            <option>Select State</option>
            <option>Uttar Pradesh</option>
            <option>Uttrakhand</option>
            <option>Delhi</option>
          </select>
        </div>
        <div>
          <label htmlFor="dob">Enter Date of Birth</label>
          <input id="dob" type="date" name="dob" onChange={handleChange} value={formValue?.dob} />
        </div>
        <div>
          <input
            type="checkbox"
            id="agree"
            name="agree"
            value={formValue.agree}
            onChange={handleChange}
          />
          <label htmlFor="agree" className="form-label">
            All the details are filled by you is accurate
          </label>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default OnboardingForm;
