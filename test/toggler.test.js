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
    it('Test default state', () => {    
      const wrapper = shallow(<Toggler />);    
      expect(wrapper.state().active).toEqual(false);    
  });
  it('Simulate change event', () => {    
    const wrapper = shallow(<Toggler />);
    const ele = wrapper.find('input');
    
    ele.simulate('change');
    expect(wrapper.state().active).toEqual(true);    
  });
  // it('Required onChange prop', () => {
  //   const onChange = jest.fn();
  //   const wrapper = shallow(<Toggler onChange={onChange}/>);
  //   expect(wrapper.props().onChange).toBeDefined();
  // });
  it('Snapshot creation', () => {
    const rendered = renderer.create(
      <Toggler active={true}/>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
