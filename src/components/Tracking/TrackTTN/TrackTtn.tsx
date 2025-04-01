import React, { useState } from "react";
import s from './TrackTtn.module.css';
import SvgIcon from "@/components/SvgIcon";

const TrackTtn = ({ selected }: any) => {
  const [ttn, setTtn] = useState("");
  const [error, setError] = useState("");

  const formatInput = (value: string) => {
    return value
      .replace(/\D/g, '')                // залишає тільки цифри
      .slice(0, 16)                      // максимум 16 цифр
      .replace(/(\d{4})(?=\d)/g, '$1 '); // розбиває по 4
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatInput(e.target.value);
    setTtn(formatted);
  };

  const handleCheck = () => {
    const cleanTtn = ttn.replace(/\s+/g, '');
    if (cleanTtn.length !== 16) {
      setError("Номер ТТН має містити рівно 16 цифр");
      return;
      }
      selected("step2")
    setError("");
    // step1(cleanTtn); // якщо треба передати кудись
  };

  return (
    <div className={s.trackBox}>
      <div className={s.inner}>
        <h4 className={s.subtitle}>Дані відправлення</h4>
        <input
          className={s.input}
          placeholder="ТТН має містити 16 цифр"
          value={ttn}
          onChange={handleChange}
        />
        {error && <p className={s.error}>{error}</p>}
        
          </div>
          <div className={s.buttons}>
          {/* <button className={s.back} onClick={() => selected(null)}>Назад</button> */}
              <button className={s.next} onClick={handleCheck}>Відстежити <SvgIcon name={"sparow"} /></button>
        </div>
    </div>
  );
};

export default TrackTtn;
