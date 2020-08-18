import { Dummy } from "./Dummy";

describe("<Dummy/>", () => {
    it("matches snapshot", () => {
        expect(shallow(<Dummy />)).toMatchSnapshot();
    });
});
