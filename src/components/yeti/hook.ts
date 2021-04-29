import { useCallback, useState } from 'react';

export function useYeti() {
  const [total, setTotal] = useState(0);
  const handleClick = useCallback(() => {
    setTotal((total) => total + 1);
  }, []);

  return {
    handleClick,
    total,
  };
}
