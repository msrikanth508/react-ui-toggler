import React from 'react';
import ReactDOM from 'react-dom';
import Toggler from '../app/toggler';
import { shallow, mount  } from 'enzyme';
import renderer from 'react-test-renderer';

describe('The Toggler app', () => {
  it('Renders toggle', () => {
    const wrapper = shallow(<Toggler active={true}/>);    
    expect(wrapper.find('.toggle-container').length).toEqual(1);
  });
  it('Test tooltip prop', () => {
    const wrapper = mount(<Toggler tooltip='Test'/>);
    expect(wrapper.find('[title="Test"]').length).toEqual(1);
  });
  it('Test onLabel prop', () => {
    const wrapper = mount(<Toggler onLabel='ON'/>);
    expect(wrapper.find('[data-on="ON"]').length).toEqual(1);
  });
  it('Test offLabel prop', () => {
    const wrapper = mount(<Toggler offLabel='OFF'/>);
    expect(wrapper.find('[data-off="OFF"]').length).toEqual(1);
  });
  // it('Test onChange prop', () => {
  //   // const mockFunc = jest.fn();
  //   // const wrapper = mount(<Toggler onChange={mockFunc}/>);
  //   // expect(mockFunc).toBeCalled();

  // const wrapper = shallow(<Toggler/>);
  //  wrapper.instance().onChange = jest.fn();
  //  wrapper.update();
  //  wrapper.find('.toggle-checkbox').simulate('click');
  //  wrapper.instance().onChange();
  //  expect(wrapper.onChange).toHaveBeenCalled();
  // });
  it('Snapshot creation', () => {
    const rendered = renderer.create(
      <Toggler active={true}/>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
