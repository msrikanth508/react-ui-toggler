/* eslint jsx-a11y/label-has-for:0 */
/* eslint react/forbid-foreign-prop-types:0 */
import React, { PropTypes } from 'react';
import './styles.scss';

/**
 * Toggler
 */
export default class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: props.isActive,
    };
  }
  /**
   * onChange Event
   */
  onChange =(event) => {
    let { isActive } = this.state;
    isActive = !isActive;
    this.setState({ isActive });
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event, isActive);
    }
  }
  /**
   * render
   */
  render() {
    return (
      <div className="toggle-container">
        <label className="toggler">
          <input
            disabled={this.props.disabled}
            type="checkbox"
            className="toggle-checkbox"
            checked={this.state.isActive}
            onChange={this.onChange}
          />
          <div
            data-on={this.props.onLabel}
            data-off={this.props.offLabel}
            title={this.props.tooltip}
          />
        </label>
      </div>
    );
  }
}

/**
 * Toggler
 */
Toggler.propTypes = {
  onChange: PropTypes.func,
  tooltip: PropTypes.string,
  onLabel: PropTypes.string,
  offLabel: PropTypes.string,
  isActive: PropTypes.bool,
  disabled: PropTypes.bool,
};

/**
 * Toggler
 */
Toggler.defaultProps = {
  onLabel: '',
  offLabel: '',
  tooltip: '',
  isActive: false,
  onChange: null,
  disabled: false,
};
