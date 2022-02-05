import React from "react";
import { mount } from "enzyme";
import Forma from "../Forma";

let komponenta;

beforeEach(() => {
  komponenta = mount(<Forma />);
});

afterEach(() => {
  komponenta.unmount();
});

test("ima dva područja za unos i jedan botun", () => {
  expect(komponenta.find("input").length).toEqual(2);
  expect(komponenta.find("button").length).toEqual(1);
});

describe("područje za unos imenana i prezimena", () => {
  beforeEach(() => {
    // simuliramo unos imena
    komponenta.find("#ime").simulate("change", {
      target: { value: "Frane" },
    });

    // simuliramo unos prezimena
    komponenta.find("#prezime").simulate("change", {
      target: { value: "Caleta" },
    });
  
    komponenta.update();
  });

  test("ima područje za unos imena gdje korisnik može pisati", () => {
    expect(komponenta.find("#ime").prop("value")).toEqual("Frane");
  });

  test("ima područje za unos prezimena gdje korisnik može pisati", () => {
    expect(komponenta.find("#prezime").prop("value")).toEqual("Caleta");
  });

  test("kada pošaljemo formu, ime i prezime se isprazne", () => {
    komponenta.find("form").simulate("submit");
    komponenta.update();
    expect(komponenta.find("#ime").prop("value")).toEqual("");
    expect(komponenta.find("#prezime").prop("value")).toEqual("");
  });
});
