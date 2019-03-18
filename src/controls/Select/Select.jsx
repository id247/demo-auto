import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { selectOptionsPropType } from 'constants/propTypes';
import testIds from 'constants/testIds';
import SelectPortal from './SelectPortal';
import './styles.scss';

class Select extends React.Component {
  state = this.getState();

  select = React.createRef();
  dropdown = React.createRef();
  options = [];

  componentDidUpdate(_, prevState) {
    const { isOpen } = this.state;

    const isJustOpened = isOpen && !prevState.isOpen;
    const isJustCloseed = !isOpen && prevState.isOpen;

    if (isJustOpened) {
      this.updatePosition();
      this.options[0].focus();
      this.addListeners();
    }

    if (isJustCloseed) {
      this.removeListeners();
    }
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  addListeners() {
    document.addEventListener('mousedown', this.handleClickOutside);
    window.addEventListener('resize', this.handleResize);
  }

  removeListeners() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    window.removeEventListener('resize', this.handleResize);
  }

  handleClickOutside = e => {
    if (
      this.dropdown.current &&
      !this.dropdown.current.contains(e.target) &&
      !this.select.current.contains(e.target)
    ) {
      this.setState({
        isOpen: false
      });
    }
  };

  updatePosition() {
    const bodyRect = document.body.getBoundingClientRect();
    const selectRect = this.select.current.getBoundingClientRect();
    const left = selectRect.left - bodyRect.left;
    const selectTop = selectRect.top - bodyRect.top;
    const dropdownTop = selectTop + selectRect.height;

    const bottomLile = -bodyRect.top + window.innerHeight;

    this.dropdown.current.style.left = `${left}px`;
    this.dropdown.current.style.width = `${selectRect.width}px`;

    if (bottomLile - dropdownTop > 160) {
      this.dropdown.current.style.top = `${dropdownTop}px`;
      this.dropdown.current.style.bottom = ``;
    } else {
      const dropdownBottom = bodyRect.height - selectTop;
      this.dropdown.current.style.bottom = `${dropdownBottom}px`;
      this.dropdown.current.style.top = ``;
    }
  }

  handleResize = () => {
    this.setState({
      isOpen: false
    });
  };

  getState() {
    const { defaultValue, options } = this.props;
    let selected;

    if (defaultValue !== undefined) {
      selected = defaultValue;
    } else if (options.length > 0) {
      selected = options[0].value;
    }

    return {
      isOpen: false,
      selected
    };
  }

  handleClick = e => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };

  handleSelect = value => e => {
    e.persist();
    const { onChange, name } = this.props;

    this.setState(
      {
        selected: value,
        isOpen: false
      },
      () => {
        if (typeof onChange === 'function') {
          onChange({
            ...e,
            target: {
              ...e.target,
              name,
              value
            }
          });
        }
      }
    );
  };

  render() {
    const { options, name, id, defautlValue, ...props } = this.props;
    const { isOpen, selected } = this.state;

    const selectedOption = options.find(o => o.value === selected) || {};

    return (
      <div
        ref={this.select}
        className="select"
        name={name}
        id={id || name}
        data-testid={testIds.select}
        {...props}
      >
        <button
          type="button"
          data-testid={testIds.selectButton}
          className={classNames('select__button', {
            'select__button--is-opened': isOpen
          })}
          onClick={this.handleClick}
        >
          {selectedOption.title}
        </button>
        <input type="hidden" name={name} value={selected} />
        {isOpen && options && options.length && (
          <SelectPortal>
            <div className="select-dropdown" ref={this.dropdown}>
              {options.map((o, i) => (
                <button
                  ref={node => (this.options[i] = node)}
                  type="button"
                  className={classNames('select-dropdown__item', {
                    'select-dropdown__item--is-selectable': !o.isEmpty,
                    'select-dropdown__item--is-selected': o.value === selected
                  })}
                  key={o.value}
                  onClick={this.handleSelect(o.value)}
                >
                  {o.title}
                </button>
              ))}
            </div>
          </SelectPortal>
        )}
      </div>
    );
  }
}

Select.propTypes = {
  options: selectOptionsPropType.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func
};

export default Select;
