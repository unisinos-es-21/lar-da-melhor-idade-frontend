import { useEffect, useState } from 'react';
import { client } from './client';

export function hello() {
  return client.get('test/hello');
}

export function useHello() {
  const [text, setText] = useState(null);

  useEffect(() => {
    async function getHello() {
      const { data } = await hello();

      setText(data);
    }

    getHello();
  }, [text]);

  return text;
}
