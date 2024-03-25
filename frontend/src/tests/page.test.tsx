import React from 'react';
import { render } from '@testing-library/react';
import Page from '../app/page';

describe('Page Component', () => {
  test('renders main tag', () => {
    const { container } = render(<Page />);
    const mainElement = container.querySelector('main');
    expect(mainElement).toBeTruthy(); // Verifica se o elemento main existe no DOM
  });
});
