// src/App.test.tsx
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('vite + React test', () => {
  render(<App />);

  const headingElement = screen.getByText(/Vite \+ React/i);
  expect(headingElement).toBeInTheDocument();
});
