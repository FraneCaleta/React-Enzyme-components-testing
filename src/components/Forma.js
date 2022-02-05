import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";

const PrimjerFormeZaDiplomski = () => {
  const [ime, postaviIme] = useState("");
  const [prezime, postaviPrezime] = useState("");
  return (
    <form
      onSubmit={(e) => {
        postaviIme("");
        postaviPrezime("");
      }}
      className="ui form"
    >
      <div className="field">
        <label>Ime</label>
        <input
          value={ime}
          onChange={(e) => postaviIme(e.target.value)}
          id="ime"
          placeholder="Unesi ime"
        />
      </div>
      <div className="field">
        <label>Prezime</label>
        <input
          value={prezime}
          onChange={(e) => postaviPrezime(e.target.value)}
          id="prezime"
          placeholder="Unesi prezime"
        />
      </div>
      <button type="submit" className="ui button">
        Pošalji
      </button>
    </form>
  );
};

export default PrimjerFormeZaDiplomski;
