import React from "react";
import s from './TrackData.module.css';
import SvgIcon from "@/components/SvgIcon";

interface TrackingData {
    TTN: string;
    Status: string;
    Numberdoc: string;
    Comment: string;
    DateYear: string;
    DateDay: number;
    DateMonth: number;
    created_at: string;
    Division: string;
    DivisionTo: string;
    Direction: string;
    CarrierTracker: string;
    Carrier: string;
    CarrierTrackerNom: string;
}

interface TrackDataProps {
    selected: () => void;
    data: { data: TrackingData[] };
}

const TrackData: React.FC<TrackDataProps> = ({ selected, data }) => {
    const reversedData = [...data.data].reverse();
    const latest = reversedData[0]; // берём свежую запись для шапки

    return (
        <div className={s.trackBox}>
            <div className={s.inner}>
              

                {/* === Блок Дані відправлення === */}
                <div className={s.card}>
                    <h5>Дані відправлення</h5>
                    <p><b>Номер відправлення:</b> {latest.TTN}</p>
                    <p><b>Дата відправлення:</b> {latest.DateDay}.{latest.DateMonth}.{latest.DateYear}</p>
                    <p><b>Відправлено:</b> {latest.Division}</p>
                    <p><b>Отримання:</b> {latest.DivisionTo}</p>
                    <p><b>Орієнтовна дата доставки:</b> {latest.DateDay + 7}.{latest.DateMonth}.{latest.DateYear}</p> {/* Пример */}
                </div>

                {/* === Блок Історія замовлення === */}
                <div className={s.card}>
                    <h5>Історія замовлення</h5>
                    <div className={s.timeline}>
                        {reversedData.map((item, index) => (
                            <div key={index} className={s.timelineItem}>
                                <div className={s.timelineDot}></div>
                                <div className={s.timelineContent}>
                                    <p><b>{item.Status}</b></p>
                                    <p>{item.DateDay}.{item.DateMonth}.{item.DateYear} {new Date(item.created_at).toLocaleTimeString()}</p>
                                    {item.Comment && <p><i>{item.Comment}</i></p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={s.buttons}>
                <button className={s.next} onClick={selected}>
                    Закрити <SvgIcon name={"sparow"} />
                </button>
            </div>
        </div>
    );
};

export default TrackData;
