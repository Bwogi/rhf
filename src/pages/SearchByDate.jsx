import React, { useState } from "react";

const SearchByDate = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the search using startDate and endDate values
    console.log("Start date:", startDate);
    console.log("End date:", endDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Start date:
        <input
          type="date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </label>
      <label>
        End date:
        <input
          type="date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchByDate;
