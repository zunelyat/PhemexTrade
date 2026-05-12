// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PhemexTrade title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PhemexTrade/i);
    expect(titleElement).toBeInTheDocument();
});
