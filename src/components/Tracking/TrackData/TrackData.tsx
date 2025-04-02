// import React, { useEffect, useState } from "react";
// import s from './TrackData.module.css';
// import SvgIcon from "@/components/SvgIcon";
// import { fetchInPostData, inpostStatusMap } from "../trackingInpost";

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
//     const latest = reversedData[0];

//     const [weight, setWeight] = useState<string | null>(null);
//     const [priceUAH, setPriceUAH] = useState<number | null>(null);
//     const [pricePLN, setPricePLN] = useState<string | null>(null);
//     const [mergedTimeline, setMergedTimeline] = useState<any[]>([]);

//     // ====== Данні НП =======
//     useEffect(() => {
//         const fetchNP = async () => {
//             try {
//                 const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify({
//                         apiKey: "789c9c5769a09f148f3c306d4079bc74",
//                         modelName: "TrackingDocument",
//                         calledMethod: "getStatusDocuments",
//                         methodProperties: {
//                             Documents: [
//                                 { DocumentNumber: latest.TTN, Phone: "380958010474" }
//                             ]
//                         }
//                     })
//                 });
//                 const json = await response.json();
//                 const info = json.data?.[0];

//                 if (info) {
//                     setWeight(info.DocumentWeight ? `${info.DocumentWeight} кг` : "немає даних");
//                     setPriceUAH(info.AnnouncedPrice || null);
//                 }

//             } catch (err) {
//                 console.error("Помилка запиту до НП:", err);
//                 setWeight("помилка");
//             }
//         };

//         fetchNP();
//     }, [latest.TTN]);

//     // ====== Курс PLN =======
//     useEffect(() => {
//         if (!priceUAH) return;

//         const fetchExchangeRate = async () => {
//             try {
//                 const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=PLN&json');
//                 const result = await response.json();
//                 const rate = result[0]?.rate;

//                 if (rate) {
//                     const priceInPln = (priceUAH / rate).toFixed(2);
//                     setPricePLN(priceInPln);
//                 }
//             } catch (error) {
//                 console.error('Помилка при отриманні курсу:', error);
//                 setPricePLN("помилка");
//             }
//         };

//         fetchExchangeRate();
//     }, [priceUAH]);

//     // ====== Об'єднання статусів =======
//     useEffect(() => {
//         const getInPost = async () => {
//             if (latest.Direction === "UA-PL" && latest.Carrier === "inpost" && latest.CarrierTrackerNom) {
//                 const timeline = await fetchInPostData(latest.CarrierTrackerNom);

//                 const formattedInpost = timeline.map((item: any) => ({
//                     type: 'inpost',
//                     status: item.status,
//                     date: item.datetime,
//                     location: item.location || null
//                 }));

//                 const formattedOur = reversedData.map((item) => ({
//                     type: 'our',
//                     status: item.Status,
//                     date: item.created_at,
//                     comment: item.Comment || null
//                 }));

//                 const merged = [...formattedInpost, ...formattedOur].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
//                 setMergedTimeline(merged);
//             } else {
//                 const formattedOur = reversedData.map((item) => ({
//                     type: 'our',
//                     status: item.Status,
//                     date: item.created_at,
//                     comment: item.Comment || null
//                 }));
//                 setMergedTimeline(formattedOur);
//             }
//         };

//         getInPost();
//     }, [latest.TTN]);

//     return (
//         <div className={s.trackBox}>
//             <div className={s.inner}>
//                 <div className={s.card}>
//                     <h2>Дані відправлення</h2>
//                     <p><b>Номер відправлення:</b> {latest.TTN}</p>
//                     <p><b>Дата відправлення:</b> {latest.DateDay}.{latest.DateMonth}.{latest.DateYear}</p>
//                     <p><b>Відправлено:</b> {latest.Division}</p>
//                     <p><b>Отримання:</b> {latest.DivisionTo}</p>
//                     <p><b>Вага:</b> {weight ?? "завантаження..."}</p>
//                     <p><b>Оціночна вартість:</b> {priceUAH ? `${priceUAH} грн` : "завантаження..."}</p>
//                     <p><b>Оціночна вартість у PLN:</b> {pricePLN ?? "завантаження..."}</p>
//                 </div>

//                 <div className={s.card}>
//                     <h5>Історія замовлення</h5>
//                     <div className={s.timeline}>
//                         {mergedTimeline.map((item, index) => (
//                             <div key={index} className={`${s.timelineItem} ${item.type === 'inpost' ? s.inpost : ''}`}>
//                                 <div className={s.timelineDot}></div>
//                                 <div className={s.timelineContent}>
//                                     {item.type === 'inpost' ? (
//                                         <>
//                                             <p><b>InPost статус:</b> {inpostStatusMap[item.status] || item.status}</p>
//                                             <p>{new Date(item.date).toLocaleString()}</p>
//                                             {item.location && <p><b>Локація:</b> {item.location}</p>}
//                                         </>
//                                     ) : (
//                                         <>
//                                             <p><b>{item.status}</b></p>
//                                             <p>{new Date(item.date).toLocaleString()}</p>
//                                             {item.comment && <p><i>{item.comment}</i></p>}
//                                         </>
//                                     )}
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
  ttn: string;
}

const TrackData: React.FC<TrackDataProps> = ({ selected, data, ttn }) => {
    const reversedData = [...data.data].reverse();
    const latest = reversedData[0] || {};

    const [weight, setWeight] = useState<string | null>(null);
    const [priceUAH, setPriceUAH] = useState<number | null>(null);
    const [pricePLN, setPricePLN] = useState<string | null>(null);
    const [mergedTimeline, setMergedTimeline] = useState<any[]>([]);
    const [npSenderAddress, setNpSenderAddress] = useState<string | null>(null);
    const [inpostAddress, setInpostAddress] = useState<string | null>(null);

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
                            Documents: [{ DocumentNumber: ttn, Phone: "380958010474" }]
                        }
                    })
                });
                const json = await response.json();
                const info = json.data?.[0];

                if (info) {
                    setWeight(info.DocumentWeight ? `${info.DocumentWeight} кг` : "немає даних");
                    setPriceUAH(info.AnnouncedPrice || null);
                    setNpSenderAddress(info.SenderAddress || latest.Division);

                    const npTimeline = [];
                  if (info.DateCreated) {
                      console.log(info.DateCreated);
                      
                        // npTimeline.push({
                        //     type: 'nova',
                        //   status: "Створено відправлення",
                        //     //  status: info.Status,
                        //     date: info.DateCreated
                        // });
                    }
                    if (info.ActualDeliveryDate) {
                        npTimeline.push({
                            type: 'nova',
                            status: info.Status,
                            date: info.ActualDeliveryDate
                        });
                      
                      
                    }

                    const formattedOur = reversedData.map((item) => ({
                        type: 'our',
                        status: item.Status,
                        date: item.created_at,
                        comment: item.Comment || null
                    }));

                    if (latest.Direction === "UA-PL" && latest.Carrier === "inpost" && latest.CarrierTrackerNom) {
                        const timeline = await fetchInPostData(latest.CarrierTrackerNom);
                        const formattedInpost = timeline.map((item: any) => ({
                            type: 'inpost',
                            status: item.status,
                            date: item.datetime,
                            location: item.location || null
                        }));

                        if (timeline[0]?.target_machine_detail?.address) {
                            const addr = timeline[0].target_machine_detail.address;
                            setInpostAddress(`${addr.line1}, ${addr.line2}`);
                        }

                        setMergedTimeline( [...formattedInpost, ...npTimeline, ...formattedOur]
    .sort((a, b) => normalizeDate(b.date).getTime() - normalizeDate(a.date).getTime()));
                    } else {
                        setMergedTimeline( [...npTimeline, ...formattedOur]
    .sort((a, b) => normalizeDate(b.date).getTime() - normalizeDate(a.date).getTime()));
                  }
                  if (latest.Direction === "PL-UA" ) {
                        const timeline = await fetchInPostData(latest.CarrierTrackerNom);
                        const formattedInpost = timeline.map((item: any) => ({
                            type: 'inpost',
                            status: item.status,
                            date: item.datetime,
                            location: item.location || null
                        }));

                        if (timeline[0]?.target_machine_detail?.address) {
                            const addr = timeline[0].target_machine_detail.address;
                            setInpostAddress(`${addr.line1}, ${addr.line2}`);
                        }
                    setNpSenderAddress(latest.Division);
                    setInpostAddress(info.RecipientAddress);
                        setMergedTimeline( [...formattedInpost, ...npTimeline, ...formattedOur]
    .sort((a, b) => normalizeDate(b.date).getTime() - normalizeDate(a.date).getTime()));
                    } else {
                        setMergedTimeline( [...npTimeline, ...formattedOur]
    .sort((a, b) => normalizeDate(b.date).getTime() - normalizeDate(a.date).getTime()));
                    }
                }
            } catch (err) {
                console.error("Помилка запиту до НП:", err);
            }
        };

      fetchNP();
      
      
    }, [ttn ]);

    useEffect(() => {
        if (!priceUAH) return;
        const fetchExchangeRate = async () => {
            try {
                const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=PLN&json');
                const result = await response.json();
                const rate = result[0]?.rate;
                if (rate) setPricePLN((priceUAH / rate).toFixed(2));
            } catch (error) {
                console.error('Помилка при отриманні курсу:', error);
                setPricePLN("помилка");
            }
        };

        fetchExchangeRate();
    }, [priceUAH]);
const normalizeDate = (date: string): Date => {
    // НП формат 1: 26-03-2025 19:22:45
    if (/^\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2}$/.test(date)) {
        const [d, m, y, time] = date.match(/(\d{2})-(\d{2})-(\d{4}) (\d{2}:\d{2}:\d{2})/)!.slice(1);
        return new Date(`${y}-${m}-${d}T${time}`);
    }

    // НП формат 2: 28.03.2025 08:56:22
    if (/^\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}:\d{2}$/.test(date)) {
        const [d, m, y, time] = date.match(/(\d{2})\.(\d{2})\.(\d{4}) (\d{2}:\d{2}:\d{2})/)!.slice(1);
        return new Date(`${y}-${m}-${d}T${time}`);
    }

    // ISO або InPost
    return new Date(date);
};
   console.log(mergedTimeline);
    return (
        <div className={s.trackBox}>
            <div className={s.inner}>
                <div className={s.card}>
                    <h2>Дані відправлення</h2>
                    <p><b>Номер відправлення:</b> {latest.TTN}</p>
                    <p><b>Дата відправлення:</b> {latest.DateDay}.{latest.DateMonth}.{latest.DateYear}</p>
                    <p><b>Відправлено:</b> {npSenderAddress || latest.Division}</p>
                    <p><b>Отримання:</b> {inpostAddress || latest.DivisionTo}</p>
                    {/* <p><b>Вага:</b> {weight ?? "завантаження..."}</p>
                    <p><b>Оціночна вартість:</b> {priceUAH ? `${priceUAH} грн` : "завантаження..."}</p>
                    <p><b>Оціночна вартість у PLN:</b> {pricePLN ?? "завантаження..."}</p> */}
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
                                    ) : item.type === 'nova' ? (
                                        <>
                                            <p><b>Nova Poshta:</b> {item.status}</p>
                                            <p>{item.date}</p>
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
