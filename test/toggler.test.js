import React from 'react';
import ReactDOM from 'react-dom';
import Toggler from '../app/toggler';
import { shallow, mount  } from 'enzyme';
import renderer from 'react-test-renderer';

describe('The Toggler app', () => {
  it('Renders toggle', () => {
    const wrapper = shallow(<Toggler isActive={true}/>);    
    expect(wrapper.find('.toggle-container').length).toEqual(1);
  });
  it('Test tooltip prop', () => {
    const wrapper = mount(<Toggler tooltip='Test'/>);
    expect(wrapper.find('[title="Test"]').length).toEqual(1);
  });
  it('Test onLabel prop', () => {
    const wrapper = mount(<Toggler onLabel='ON'/>);
    expect(wrapper.find('[data-on="ON"]').length).toEqual(1);
    expect(wrapper.props().onLabel).toEqual('ON'); 
  });
  it('Test offLabel prop', () => {
    const wrapper = mount(<Toggler offLabel='OFF'/>);
    expect(wrapper.find('[data-off="OFF"]').length).toEqual(1);
    expect(wrapper.props().offLabel).toEqual('OFF'); 
  });
    it('Test default state', () => {    
      const wrapper = shallow(<Toggler />);    
      expect(wrapper.state().isActive).toEqual(false);    
  });
  it('Simulate change event', () => {    
    const wrapper = shallow(<Toggler />);
    const ele = wrapper.find('input');
    
    ele.simulate('change');
    expect(wrapper.state().isActive).toEqual(true);    
  });
  it('Required onChange prop', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Toggler onChange={onChange}/>);
    wrapper.find('input').simulate('change');
    expect(onChange).toHaveBeenCalledWith(true);
    expect(wrapper.state().isActive).toEqual(true); 
  });
   it('Check disabled prop', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Toggler onChange={onChange} disabled />);            
    expect(wrapper.props().disabled).toEqual(true); 
  });
  it('Snapshot creation', () => {
    const rendered = renderer.create(
      <Toggler isActive={true}/>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
