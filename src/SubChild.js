import React, { useContext } from 'react';
import { UserContext } from './App';

export default function SubChild() {
  const abc = { color: 'white' };
  const data = useContext(UserContext);
  return <div style={abc}>{data.state}</div>;
}
