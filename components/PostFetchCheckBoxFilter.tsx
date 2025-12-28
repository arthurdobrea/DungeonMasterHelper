'use client';

import { useEffect, useState } from 'react';

const speedTypes = ['Walk', 'Swim', 'Fly', 'Burrow', 'Climb'];

interface CRSliderProps {
  onFinalChange: (value: string) => void;
}
export default function PostFetchCheckBoxFilter({ onFinalChange }: CRSliderProps) {
  const [value, setValue] = useState('');

  function handleCheckBox(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinalChange(value);
    }, 300);

    return () => clearTimeout(timer);
  }, [value, onFinalChange]);

  return (
    <div>
      <label>
        <input type="checkbox" name="speedType" value="burrow" onChange={handleCheckBox}></input>
        burrow
      </label>
    </div>
  );
}
