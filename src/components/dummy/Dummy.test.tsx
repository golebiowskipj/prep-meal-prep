import React from "react";
import { shallow } from "enzyme";
import { Dummy } from "./Dummy";

describe("<Dummy/>", () => {
    it("matches snapshot", () => {
        expect(shallow(<Dummy />)).toMatchSnapshot();
    });
});
