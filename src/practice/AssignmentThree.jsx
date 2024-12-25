import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CounterWithUserInfo = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState({ user: null, loading: false, error: null });

  useEffect(() => {
    const fetchUser = async () => {
      setData({ user: null, loading: true, error: null });
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${count}`);
        setData({ user: res.data, loading: false, error: null });
      } catch {
        setData({ user: null, loading: false, error: 'Error fetching data' });
      }
    };
    fetchUser();
  }, [count]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count > 1 ? count - 1 : count)}>-</button>
      <button onClick={() => setCount(count < 10 ? count + 1 : count)}>+</button>
      {data.loading && <p>Loading...</p>}
      {data.error && <p style={{ color: 'red' }}>{data.error}</p>}
      {data.user && (
        <div>
          <p><strong>Name:</strong> {data.user.name}</p>
          <p><strong>Email:</strong> {data.user.email}</p>
        </div>
      )}
    </div>
  );
};

export default CounterWithUserInfo;
