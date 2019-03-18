import React from 'react';
import PropTypes from 'prop-types';
import { fetchStatesPropType, formInputsPropType } from 'constants/propTypes';
import Select from 'controls/Select';
import Input from 'controls/Input';
import Idle from 'components/Idle';
import { inputTypes } from 'constants/forms';
import './styles.scss';

class Form extends React.Component {
  state = this.getState();

  getState() {
    const { initialValues } = this.props;
    return initialValues || {};
  }

  handleChange = e => {
    const { submitOnChange, onSubmit } = this.props;
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        if (submitOnChange) {
          onSubmit(this.state);
        }
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit, inputs } = this.props;

    const formValues = inputs.reduce((acc, i) => {
      acc[i.name] = this.state[i.name] || '';
      return acc;
    }, {});
    return onSubmit(formValues);
  };

  renderInput(input) {
    switch (input.type) {
      case inputTypes.select: {
        return (
          <Select
            name={input.name}
            id={input.name}
            options={input.options}
            onChange={this.handleChange}
            defaultValue={this.state[input.name] || ''}
          />
        );
      }
      default:
        return (
          <Input
            name={input.name}
            id={input.name}
            onChange={this.handleChange}
            defaultValue={this.state[input.name] || ''}
          />
        );
    }
  }

  render() {
    const {
      inputs,
      buttons,
      fetchStates = {},
      idlePlaceholredsNumber = 2
    } = this.props;
    const renderButtons = buttons && (
      <div className="form__buttons">{buttons}</div>
    );
    if (fetchStates.isIdle) {
      return (
        <div className="form">
          {[...Array(idlePlaceholredsNumber).keys()].map(i => (
            <div key={i} className="form__line">
              <div className="form__label">
                <Idle />
              </div>
              <div className="form__input">
                <Idle style={{ height: '20px' }} />
              </div>
            </div>
          ))}
          {renderButtons}
        </div>
      );
    }
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        {inputs.map(i => (
          <div key={i.name} className="form__line">
            <label className="form__label" htmlFor={i.name}>
              {i.label}
            </label>
            <div className="form__input">{this.renderInput(i)}</div>
          </div>
        ))}
        {renderButtons}
      </form>
    );
  }
}

Form.propTypes = {
  initialValues: PropTypes.object,
  inputs: formInputsPropType,
  fetchStates: fetchStatesPropType,
  onSubmit: PropTypes.func.isRequired,
  buttons: PropTypes.node,
  idlePlaceholredsNumber: PropTypes.number,
  submitOnChange: PropTypes.bool
};

export default Form;
