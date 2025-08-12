import React, { useState } from 'react';

function Counter() {
  const [nilai, setNilai] = useState(0);

  return (
    <div>
      <h1>Contoh useState</h1>
      <p>Nilai sekarang: {nilai}</p>
      <button onClick={() => setNilai(nilai + 1)}>Tambah</button>
      <button onClick={() => setNilai(nilai - 1)}>Kurang</button>
    </div>
  );
}

export default Counter;
