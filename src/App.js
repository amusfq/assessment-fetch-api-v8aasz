import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const request = await fetch(
      'https://indonesia-public-static-api.vercel.app/api/volcanoes'
    );
    const response = await request.json();
    setData(response);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Table Data</h1>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Bentuk</th>
            <th>Tinggi (m)</th>
            <th>Estimasi Letusan Terakhir</th>
            <th>Geolokasi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{item.nama}</td>
              <td>{item.bentuk}</td>
              <td>{item.tinggi_meter}</td>
              <td>{item.estimasi_letusan_terakhir}</td>
              <td>{item.geolokasi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
