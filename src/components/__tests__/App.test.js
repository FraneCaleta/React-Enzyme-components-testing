import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Forma from "../Forma";

test("prikazuje okvir za komentare", () => {
  const komponenta = shallow(<App />);
  expect(komponenta.find(Forma).length).toEqual(1);
});
