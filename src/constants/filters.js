import { inputTypes } from 'constants/forms';
import characteristics from './characteristics';
export default {
  [characteristics.colors]: {
    label: 'Color',
    name: 'color',
    type: inputTypes.select,
    emptyOption: {
      title: 'All car colors',
      value: '',
      isEmpty: true
    }
  },
  [characteristics.manufacturers]: {
    label: 'Manufacturer',
    name: 'manufacturer',
    type: inputTypes.select,
    emptyOption: {
      title: 'All manufacturers',
      value: '',
      isEmpty: true
    }
  }
};
