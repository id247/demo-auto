import 'jest-dom/extend-expect';
import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  bindElementToQueries
} from 'react-testing-library';
import testIds from 'constants/testIds';
import Select from '../';

afterEach(cleanup);

describe('Select component', () => {
  const name = 'name';
  const id = 'id';
  const options = [
    {
      title: 'title',
      value: 'value'
    },
    {
      title: 'title2',
      value: 'value2'
    }
  ];
  const defautlValue = 'value';

  test('Renders with defaults', async () => {
    const { container, getByTestId } = render(
      <Select
        name={name}
        id={id}
        options={options}
        defautlValue={defautlValue}
      />
    );

    const select = getByTestId(testIds.select);
    expect(select).toHaveClass('select');
    expect(select).toHaveAttribute('name', name);
    expect(select).toHaveAttribute('id', id);

    const selectButton = container.querySelector('button');
    expect(selectButton).toHaveTextContent('title');

    expect(container.firstChild).toMatchSnapshot();
  });

  test('opens and closes dropdown', async () => {
    render(
      <Select
        name={name}
        id={id}
        options={options}
        defautlValue={defautlValue}
      />
    );
    const { getByTestId } = bindElementToQueries(document.body);
    const selectButton = getByTestId(testIds.selectButton);

    fireEvent.click(selectButton);
    let dropdown = document.body.querySelector('.select-dropdown');
    const firstOption = dropdown.firstChild;
    expect(dropdown).toBeVisible();
    expect(firstOption).toHaveFocus();

    fireEvent.click(selectButton);
    dropdown = document.body.querySelector('.select-dropdown');
    expect(dropdown).toBeFalsy();
  });

  test('changes selected item, fires onChange event and closes dropdown', async () => {
    const onChange = jest.fn();
    render(
      <Select
        name={name}
        id={id}
        options={options}
        onChange={onChange}
        defautlValue={defautlValue}
      />
    );
    const { getByTestId, getByText } = bindElementToQueries(document.body);
    const selectButton = getByTestId(testIds.selectButton);

    fireEvent.click(selectButton);
    let dropdown = document.body.querySelector('.select-dropdown');
    const secondOption = getByText('title2');

    fireEvent.click(secondOption);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(selectButton).toHaveTextContent('title2');

    dropdown = document.body.querySelector('.select-dropdown');
    expect(dropdown).toBeFalsy();
  });

  test('closes dropdown on click outside component', async () => {
    const { getByTestId } = render(
      <Select
        name={name}
        id={id}
        options={options}
        defautlValue={defautlValue}
      />
    );
    const selectButton = getByTestId(testIds.selectButton);

    fireEvent.click(selectButton);
    let dropdown = document.body.querySelector('.select-dropdown');

    fireEvent.mouseDown(document.body);

    dropdown = document.body.querySelector('.select-dropdown');
    expect(dropdown).toBeFalsy();
  });
});
