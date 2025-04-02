// import React from "react";
// import s from './TrackData.module.css';
// import SvgIcon from "@/components/SvgIcon";

// interface TrackingData {
//     TTN: string;
//     Status: string;
//     Numberdoc: string;
//     Comment: string;
//     DateYear: string;
//     DateDay: number;
//     DateMonth: number;
//     created_at: string;
//     Division: string;
//     DivisionTo: string;
//     Direction: string;
//     CarrierTracker: string;
//     Carrier: string;
//     CarrierTrackerNom: string;
// }

// interface TrackDataProps {
//     selected: () => void;
//     data: { data: TrackingData[] };
// }

// const TrackData: React.FC<TrackDataProps> = ({ selected, data }) => {
//     const reversedData = [...data.data].reverse();
//     const latest = reversedData[0]; // берём свежую запись для шапки

//     return (
//         <div className={s.trackBox}>
//             <div className={s.inner}>
              

//                 {/* === Блок Дані відправлення === */}
//                 <div className={s.card}>
//                     <h5>Дані відправлення</h5>
//                     <p><b>Номер відправлення:</b> {latest.TTN}</p>
//                     <p><b>Дата відправлення:</b> {latest.DateDay}.{latest.DateMonth}.{latest.DateYear}</p>
//                     <p><b>Відправлено:</b> {latest.Division}</p>
//                     <p><b>Отримання:</b> {latest.DivisionTo}</p>
//                     <p><b>Орієнтовна дата доставки:</b> {latest.DateDay + 7}.{latest.DateMonth}.{latest.DateYear}</p> {/* Пример */}
//                 </div>

//                 {/* === Блок Історія замовлення === */}
//                 <div className={s.card}>
//                     <h5>Історія замовлення</h5>
//                     <div className={s.timeline}>
//                         {reversedData.map((item, index) => (
//                             <div key={index} className={s.timelineItem}>
//                                 <div className={s.timelineDot}></div>
//                                 <div className={s.timelineContent}>
//                                     <p><b>{item.Status}</b></p>
//                                     <p>{item.DateDay}.{item.DateMonth}.{item.DateYear} {new Date(item.created_at).toLocaleTimeString()}</p>
//                                     {item.Comment && <p><i>{item.Comment}</i></p>}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <div className={s.buttons}>
//                 <button className={s.next} onClick={selected}>
//                     Закрити <SvgIcon name={"sparow"} />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default TrackData;
import React, { useEffect, useState } from "react";
import s from './TrackData.module.css';
import SvgIcon from "@/components/SvgIcon";
import { fetchInPostData, inpostStatusMap } from "../trackingInpost";

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
    const latest = reversedData[0];

    const [weight, setWeight] = useState<string | null>(null);
    const [priceUAH, setPriceUAH] = useState<number | null>(null);
    const [pricePLN, setPricePLN] = useState<string | null>(null);
   const [inpostTimeline, setInpostTimeline] = useState<any[]>([]);
    // ====== GET NP DATA =======
    useEffect(() => {
        const fetchNP = async () => {
            try {
                const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        apiKey: "789c9c5769a09f148f3c306d4079bc74",
                        modelName: "TrackingDocument",
                        calledMethod: "getStatusDocuments",
                        methodProperties: {
                            Documents: [
                                {
                                    DocumentNumber: latest.TTN,
                                    Phone: "380958010474"
                                }
                            ]
                        }
                    })
                });
                const json = await response.json();
                const info = json.data?.[0];

                if (info) {
                    setWeight(info.DocumentWeight ? `${info.DocumentWeight} кг` : "немає даних");
                    setPriceUAH(info.AnnouncedPrice || null);
                }

            } catch (err) {
                console.error("Помилка запиту до НП:", err);
                setWeight("помилка");
            }
        };

        fetchNP();
    }, [latest.TTN]);

    // ====== GET EXCHANGE RATE =======
    useEffect(() => {
        if (!priceUAH) return;

        const fetchExchangeRate = async () => {
            try {
                const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=PLN&json');
                const result = await response.json();
                const rate = result[0]?.rate;

                if (rate) {
                    const priceInPln = (priceUAH / rate).toFixed(2);
                    setPricePLN(priceInPln);
                }
            } catch (error) {
                console.error('Помилка при отриманні курсу:', error);
                setPricePLN("помилка");
            }
        };

        fetchExchangeRate();
    }, [priceUAH]);


const [mergedTimeline, setMergedTimeline] = useState<any[]>([]);

useEffect(() => {
    const getInPost = async () => {
        if (latest.Direction === "UA-PL" && latest.Carrier === "inpost" && latest.CarrierTrackerNom) {
            const timeline = await fetchInPostData(latest.CarrierTrackerNom);

            // Змішуємо дані
            const formattedInpost = timeline.map((item: any) => ({
                type: 'inpost',
                status: item.status,
                date: item.datetime,
                location: item.location || null
            }));

            const formattedOur = reversedData.map((item) => ({
                type: 'our',
                status: item.Status,
                date: item.created_at,
                comment: item.Comment || null
            }));

            // Об'єднуємо і сортуємо по даті
            const merged = [...formattedInpost, ...formattedOur].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            setMergedTimeline(merged);
        } else {
            // Якщо немає InPost - тільки наші
            const formattedOur = reversedData.map((item) => ({
                type: 'our',
                status: item.Status,
                date: item.created_at,
                comment: item.Comment || null
            }));
            setMergedTimeline(formattedOur);
        }
    };

    getInPost();
}, [latest.TTN]);
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
                  
                    <p><b>Вага:</b> {weight ?? "завантаження..."}</p>
                    <p><b>Оціночна вартість:</b> {priceUAH ? `${priceUAH} грн` : "завантаження..."}</p>
                    <p><b>Оціночна вартість у PLN:</b> {pricePLN ?? "завантаження..."}</p>
                </div>

               
           
          <div className={s.card}>
    <h5>Історія замовлення</h5>
    <div className={s.timeline}>
        {mergedTimeline.map((item, index) => (
            <div key={index} className={`${s.timelineItem} ${item.type === 'inpost' ? s.inpost : ''}`}>
                <div className={s.timelineDot}></div>
                <div className={s.timelineContent}>
                    {item.type === 'inpost' ? (
                        <>
                            <p><b>InPost статус:</b> {inpostStatusMap[item.status] || item.status}</p>
                            <p>{new Date(item.date).toLocaleString()}</p>
                            {item.location && <p><b>Локація:</b> {item.location}</p>}
                        </>
                    ) : (
                        <>
                            <p><b>{item.status}</b></p>
                            <p>{new Date(item.date).toLocaleString()}</p>
                            {item.comment && <p><i>{item.comment}</i></p>}
                        </>
                    )}
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
