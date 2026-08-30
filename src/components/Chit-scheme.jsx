import "../assets/Chit-scheme.css";

function Chit({ chitData, setChitData }) {

  const handleChange = (e) => {

    const { name, value } = e.target;

    setChitData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };


  return (
    <div className="member-box">

      <div className="section-title">

        <span>3</span>

        CHIT-SCHEME

      </div>


      <div className="nominee-container">

        <div className="form-row">

          <label>Chit Group Name</label>

          <input
            type="text"
            required
            name="chitGroupName"
            value={chitData.chitGroupName}
            onChange={handleChange}
          />

        </div>


        <div className="form-row">

          <label>Chit Value</label>

          <input
            type="text"
            name="chitValue"
            value={chitData.chitValue}
            onChange={handleChange}
          />

        </div>


        <div className="form-row">

          <label>Monthly Installment</label>

          <input
            type="text"
            name="monthlyInstallment"
            value={chitData.monthlyInstallment}
            onChange={handleChange}
          />

        </div>


        <div className="form-row">

          <label>Total Members</label>

          <input
            type="text"
            name="totalMembers"
            value={chitData.totalMembers}
            onChange={handleChange}
          />

        </div>


        <div className="form-row">

          <label>Duration</label>

          <input
            type="text"
            name="duration"
            value={chitData.duration}
            onChange={handleChange}
          />

        </div>


        <div className="form-row">

          <label>Start Date</label>

          <input
            type="text"
            name="startDate"
            placeholder="DD/MM/YYYY"
            value={chitData.startDate}
            onChange={handleChange}
          />

        </div>


        <div className="form-row">

          <label>Due Date(Every Month)</label>

          <input
            type="text"
            name="dueDate"
            value={chitData.dueDate}
            onChange={handleChange}
          />

        </div>

      </div>

    </div>
  );
}

export default Chit;