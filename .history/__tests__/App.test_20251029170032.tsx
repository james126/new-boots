/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

test('renders correctly', async () => {
  let renderer;
  await ReactTestRenderer.act(async () => {
    renderer = ReactTestRenderer.create(<App />);
  });
  
  // Clean up
  if (renderer) {
    await ReactTestRenderer.act(async () => {
      renderer.unmount();
    });
  }
});
