import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import testIds from 'constants/testIds';
import Input from '../';

afterEach(cleanup);

describe('Input component', () => {
  test('Renders with defaults', async () => {
    const { container, getByTestId } = render(<Input />);

    const input = getByTestId(testIds.input);
    expect(input).toHaveClass('input');
    expect(input).toHaveAttribute('type', 'text');
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Handles events', async () => {
    const onChange = jest.fn();
    const event = { target: { value: 'TEST VALUE' } };
    const { getByTestId } = render(<Input onChange={onChange} />);

    const input = getByTestId(testIds.input);
    fireEvent.change(input, event);
    expect(onChange).toHaveBeenCalled();
  });
});
