import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddArrayNumber from './AddArrayNumber';

beforeEach(() => {
    render(<AddArrayNumber />);
});

test('component AddArrayNumber', () => {
    expect(screen.getByText('Add Array')).toBeInTheDocument();
});

test('button tambah array', async () => {
    await fireEvent.click(screen.getByTestId('buttonTambah'));

    expect(screen.getByTestId('arrayNumber')).toHaveTextContent('[1,]');
});
