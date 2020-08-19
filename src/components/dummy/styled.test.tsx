import React from "react";
import { shallow } from "enzyme";
import { DummyStyled } from "./styled";
import "jest-styled-components";

describe("<DummyStyled/>", () => {
    it("has color red", () => {
        expect(shallow(<DummyStyled />)).toHaveStyleRule("color", "red");
    });
});
