/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

test('renders correctly', async () => {
  jest.useFakeTimers();
  
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
  
  // Run all pending timers and cleanup
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});
