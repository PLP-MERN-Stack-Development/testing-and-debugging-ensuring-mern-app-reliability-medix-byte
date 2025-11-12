import React from 'react';

export default function Greeting({ name }) {
  return <div data-testid="greeting">Hello, {name ? name : 'guest'}!</div>;
}
