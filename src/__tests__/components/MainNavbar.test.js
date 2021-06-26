import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MainNavbar from '../../components/MainNavbar_deprecated';

configure({ adapter: new Adapter() });

describe("MainNavbar", () =>{
    it("mounts the component without errors", () => {
        const wrapper = shallow(<MainNavbar />);
        expect(wrapper.find(`[data-testid="main-nav-bar"]`).length).toBe(1);
    });
});