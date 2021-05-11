import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NavIcon from '../../components/NavIcon';

//import searchIcon from '../../assets/img/search-icon-png-9973.png'; //I could just not test for this or try a http link

configure({ adapter: new Adapter() });

describe("NavIcon", () => {
    //having a setUp() function doesn't work in my experience
    it("loads the correct icon", () => {
        const wrapper = shallow(<NavIcon image=/* {searchIcon} */ "https://cdn3.iconfinder.com/data/icons/block/32/search-512.png"/>);
        const imageElement = wrapper.find("img");
        expect(imageElement.prop("src")).toEqual(/* searchIcon */"https://cdn3.iconfinder.com/data/icons/block/32/search-512.png");       //doesn't work with local images, I get    Please check your configuration for these entries:{"moduleNameMapper": {   etc
    });

    it("has the right route path", () => {
        const wrapper = shallow(<NavIcon path="/whatever" />);
        expect(wrapper.find("a").prop("href")).toBe("/whatever");     //why the hell am i even testing this, of course the prop will be correct, I just gave it the damn thing
    });

    it("mounts the component without errors", () => {
        const wrapper = shallow(<NavIcon image="https://ducks/duck.jpg" path="/ducks"/>);
        expect(wrapper.find(`[data-test="main-nav-anchor"]`).length).toBe(1);
    });
});