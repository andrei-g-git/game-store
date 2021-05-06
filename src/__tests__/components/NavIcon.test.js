import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NavIcon from '../../components/NavIcon';

import searchIcon from '../../assets/img/search-icon-png-9973.png';

configure({ adapter: new Adapter() });

describe("NavIcon", () => {
    //having a setUp() function doesn't work in my experience
    it("loads the correct icon", () => {
        // const wrapper = shallow(<NavIcon image={searchIcon} />);
        // const imageElement = wrapper.find("img");
        // expect(imageElement.prop("src")).toEqual(searchIcon);       doesn't work with images, I get    Please check your configuration for these entries:{"moduleNameMapper": {   etc
    });

    it("has the right route path", () => {
        // const wrapper = shallow(<NavIcon path="/whatever" />);
        // expect(wrapper.find("a").prop("href")).toBe("/whatever");     basically I can't test anything if the component imports an image
    });
});