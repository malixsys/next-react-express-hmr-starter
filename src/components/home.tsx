'use client';

import { useState } from 'react';

export const HomePage = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h5>Count: {count}</h5>
      <button onClick={() => setCount((old) => old + 1)}>count++</button>
    </section>
  );
};
