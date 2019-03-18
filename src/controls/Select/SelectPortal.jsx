import React from 'react';
import ReactDOM from 'react-dom';

let dropdownRoot = document.getElementById('dropdown-root');
if (!dropdownRoot) {
  dropdownRoot = document.createElement('div');
  dropdownRoot.setAttribute('id', 'dropdown-root');
  document.body.appendChild(dropdownRoot);
}

class SelectPortal extends React.Component {
  el = document.createElement('div');

  componentDidMount() {
    dropdownRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    dropdownRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default SelectPortal;
