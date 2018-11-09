import React from 'react';
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import debounce from './index';


Enzyme.configure({ adapter: new Adapter() });


const TestComponent = ({ onInputChange }) =>
    <input type="text" onChange={onInputChange} />;


test('debounce should work correctly', (done) => {
    const callback = jest.fn();
    const wrapper = shallow(<TestComponent onInputChange={debounce(e => callback(), 10)}/>);
    const input = wrapper.find('input');
    const event = { target: { value: '42' }, persist: jest.fn() };

    input.simulate('change', event);
    input.simulate('change', event);
    input.simulate('change', event);

    // Expect that only one change will be applied in 10ms
    setTimeout(() => {
        expect(callback.mock.calls.length).toBe(1);
        done()
    }, 10);
});