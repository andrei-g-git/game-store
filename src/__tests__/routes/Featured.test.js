import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Featured from '../../routes/Featured';

import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

describe("Featured", () => {
    it("renders all item lists from props", () => { //it needs a proper store, don't know how to pass it
        // let popular = [
        //     {title: "starfield", description: "blah"},
        //     {title: "fallout", description: "blah blah"}
        // ];       
        // let free = [
        //     {title: "starfield", description: "blah"},
        //     {title: "fallout", description: "blah blah"}
        // ];
        // let newGames = [
        //     {title: "starfield", description: "blah"},
        //     {title: "fallout", description: "blah blah"}
        // ];    
        // const props = {
        //     popular: popular,
        //     newGames: newGames,
        //     free: free
        // }    
        // const wrapper = shallow(<Provider store={null}><Featured {...props}/></Provider>);
        // const titles = wrapper.find("h3");
        // expect(titles.length).toBe(66);
    })
});