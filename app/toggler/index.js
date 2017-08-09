import React, { PropTypes } from 'react';
import './styles.scss';

/**
 * Toggler
 */
class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }
  /**
   * onChange Event
   */
  onChange =() => {
    const active = !this.state.active;
    this.setState(Object.assign({}, this.state, { active }));
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(active);
    }
  }
  /**
   * render
   */
  render() {
    return (
      <div className="toggle-container">
        <label className="toggler" htmlFor="toogler-label">
          <input type="checkbox" className="toggle-checkbox" checked={this.state.active} onChange={this.onChange} />
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
  active: PropTypes.bool,
};

/**
 * Toggler
 */
Toggler.defaultProps = {
  onLabel: '',
  offLabel: '',
  tooltip: '',
  active: false,
  onChange: null,
};

/**
 * export togger
 */
export default Toggler;
