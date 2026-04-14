import { useState } from "react";

export function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  setTimeout(() => {
    setDebouncedValue(value);
  }, delay);

  return debouncedValue;
}
