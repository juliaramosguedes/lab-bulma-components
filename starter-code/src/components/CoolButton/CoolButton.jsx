import React, { Component } from 'react';

class CoolButton extends Component {
  render() {
    return (
      <a className={`button my-class ${this.props.isRounded && 'is-rounded'} ${this.props.isInfo && 'is-info'} ${this.props.isSuccess && 'is-success'} ${this.props.isSmall && 'is-small'} ${this.props.isPrimary && 'is-primary'}`}>
        {this.props.text}
      </a>
    );
  }
}

export default CoolButton;
