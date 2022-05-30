import React, { createContext } from 'react';

export const DataContext = createContext();

const data = [
  {
    id: 1,
    name: 'kishor Kc',
    learn: 'context api',
  },
  {
    id: 2,
    name: 'Uchit Pathak',
    learn: 'nginx',
  },
  {
    id: 3,
    name: 'Mahendra Thapa',
    learn: 'responsive design',
  },
  {
    id: 4,
    name: 'Pramish Yadav',
    learn: 'seo',
  },
  {
    id: 5,
    name: 'Nikesh Kandel',
    learn: 'redux',
  },
];
export default function Datacontext({ children }) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
