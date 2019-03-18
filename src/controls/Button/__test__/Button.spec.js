import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import testIds from 'constants/testIds';
import Button from '../';

afterEach(cleanup);

describe('Button component', () => {
  test('Renders with defaults', async () => {
    const { container, getByTestId } = render(<Button />);

    const button = getByTestId(testIds.button);
    expect(button).toHaveClass('button button--primary');
    expect(button).toHaveAttribute('type', 'button');
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Renders with props', async () => {
    const text = 'Button';
    const type = 'submit';
    const { container, getByTestId } = render(
      <Button type={type}>{text}</Button>
    );

    const button = getByTestId(testIds.button);
    expect(button).toHaveTextContent(text);
    expect(button).toHaveClass('button button--primary');
    expect(button).toHaveAttribute('type', type);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Handles events', async () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button onClick={onClick} />);

    const button = getByTestId(testIds.button);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
