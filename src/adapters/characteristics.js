export const adaptColors = (colors = []) => colors;

export const adaptManufacturer = ({ name }) => name;

export const adaptManufacturers = (manufacturers = []) =>
  manufacturers.map(m => adaptManufacturer(m));
