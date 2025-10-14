
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
//   data: { data: TrackingData[] };
//   ttn: string;
// }

// const TrackData: React.FC<TrackDataProps> = ({ selected, data, ttn }) => {
//     const reversedData = [...data.data].reverse();
//     const latest = reversedData[0] || {};

//     const [weight, setWeight] = useState<string | null>(null);
//     const [priceUAH, setPriceUAH] = useState<number | null>(null);
//     const [pricePLN, setPricePLN] = useState<string | null>(null);
//     const [mergedTimeline, setMergedTimeline] = useState<any[]>([]);
//     const [npSenderAddress, setNpSenderAddress] = useState<string | null>(null);
//     const [inpostAddress, setInpostAddress] = useState<string | null>(null);

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
//                             Documents: [{ DocumentNumber: ttn, Phone: "380958010474" }]
//                         }
//                     })
//                 });
//                 const json = await response.json();
//                 const info = json.data?.[0];

//                 if (info) {
//                     setWeight(info.DocumentWeight ? `${info.DocumentWeight} кг` : "немає даних");
//                     setPriceUAH(info.AnnouncedPrice || null);
//                     setNpSenderAddress(info.SenderAddress || latest.Division);

//                     const npTimeline = [];
//                   if (info.DateCreated) {
//                       console.log(info.DateCreated);
                      
//                         // npTimeline.push({
//                         //     type: 'nova',
//                         //   status: "Створено відправлення",
//                         //     //  status: info.Status,
//                         //     date: info.DateCreated
//                         // });
//                     }
//                     if (info.ActualDeliveryDate) {
//                         npTimeline.push({
//                             type: 'nova',
//                             status: info.Status,
//                             date: info.ActualDeliveryDate
//                         });
                      
                      
//                     }

//                     const formattedOur = reversedData.map((item) => ({
//                         type: 'our',
//                         status: item.Status,
//                         date: item.created_at,
//                         comment: item.Comment || null
//                     }));

//                     if (latest.Direction === "UA-PL" && latest.Carrier === "inpost" && latest.CarrierTrackerNom) {
//                         const timeline = await fetchInPostData(latest.CarrierTrackerNom);
//                         const formattedInpost = timeline.map((item: any) => ({
//                             type: 'inpost',
//                             status: item.status,
//                             date: item.datetime,
//                             location: item.location || null
//                         }));

//                         if (timeline[0]?.target_machine_detail?.address) {
//                             const addr = timeline[0].target_machine_detail.address;
//                             setInpostAddress(`${addr.line1}, ${addr.line2}`);
//                         }

//                         setMergedTimeline( [...formattedInpost, ...npTimeline, ...formattedOur]
//     .sort((a, b) => normalizeDate(b.date).getTime() - normalizeDate(a.date).getTime()));
//                     } else {
//                         setMergedTimeline( [...npTimeline, ...formattedOur]
//     .sort((a, b) => normalizeDate(b.date).getTime() - normalizeDate(a.date).getTime()));
//                   }
//                   if (latest.Direction === "PL-UA" ) {
//                         const timeline = await fetchInPostData(latest.CarrierTrackerNom);
//                         const formattedInpost = timeline.map((item: any) => ({
//                             type: 'inpost',
//                             status: item.status,
//                             date: item.datetime,
//                             location: item.location || null
//                         }));

//                         if (timeline[0]?.target_machine_detail?.address) {
//                             const addr = timeline[0].target_machine_detail.address;
//                             setInpostAddress(`${addr.line1}, ${addr.line2}`);
//                         }
//                     setNpSenderAddress(latest.Division);
//                     setInpostAddress(info.RecipientAddress);
//                         setMergedTimeline( [...formattedInpost, ...npTimeline, ...formattedOur]
//     .sort((a, b) => normalizeDate(b.date).getTime() - normalizeDate(a.date).getTime()));
//                     } else {
//                         setMergedTimeline( [...npTimeline, ...formattedOur]
//     .sort((a, b) => normalizeDate(b.date).getTime() - normalizeDate(a.date).getTime()));
//                     }
//                 }
//             } catch (err) {
//                 console.error("Помилка запиту до НП:", err);
//             }
//         };

//       fetchNP();
      
      
//     }, [ttn ]);

//     useEffect(() => {
//         if (!priceUAH) return;
//         const fetchExchangeRate = async () => {
//             try {
//                 const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=PLN&json');
//                 const result = await response.json();
//                 const rate = result[0]?.rate;
//                 if (rate) setPricePLN((priceUAH / rate).toFixed(2));
//             } catch (error) {
//                 console.error('Помилка при отриманні курсу:', error);
//                 setPricePLN("помилка");
//             }
//         };

//         fetchExchangeRate();
//     }, [priceUAH]);
// const normalizeDate = (date: string): Date => {
//     // НП формат 1: 26-03-2025 19:22:45
//     if (/^\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2}$/.test(date)) {
//         const [d, m, y, time] = date.match(/(\d{2})-(\d{2})-(\d{4}) (\d{2}:\d{2}:\d{2})/)!.slice(1);
//         return new Date(`${y}-${m}-${d}T${time}`);
//     }

//     // НП формат 2: 28.03.2025 08:56:22
//     if (/^\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}:\d{2}$/.test(date)) {
//         const [d, m, y, time] = date.match(/(\d{2})\.(\d{2})\.(\d{4}) (\d{2}:\d{2}:\d{2})/)!.slice(1);
//         return new Date(`${y}-${m}-${d}T${time}`);
//     }

//     // ISO або InPost
//     return new Date(date);
// };
//    console.log(mergedTimeline);
//     return (
//         <div className={s.trackBox}>
//             <div className={s.inner}>
//                 <div className={s.card}>
//                     <h2>Дані відправлення</h2>
//                     <p><b>Номер відправлення:</b> {latest.TTN}</p>
//                     <p><b>Дата відправлення:</b> {latest.DateDay}.{latest.DateMonth}.{latest.DateYear}</p>
//                     <p><b>Відправлено:</b> {npSenderAddress || latest.Division}</p>
//                     <p><b>Отримання:</b> {inpostAddress || latest.DivisionTo}</p>
//                     {/* <p><b>Вага:</b> {weight ?? "завантаження..."}</p>
//                     <p><b>Оціночна вартість:</b> {priceUAH ? `${priceUAH} грн` : "завантаження..."}</p>
//                     <p><b>Оціночна вартість у PLN:</b> {pricePLN ?? "завантаження..."}</p> */}
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
//                                     ) : item.type === 'nova' ? (
//                                         <>
//                                             <p><b>Nova Poshta:</b> {item.status}</p>
//                                             <p>{item.date}</p>
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
import { fetchDhlData } from "./fetchDhlData";

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
    Address: string;
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
                        apiKey: "058ede2709b4821bc076351701926af7",
                        modelName: "TrackingDocument",
                        calledMethod: "getStatusDocuments",
                        methodProperties: {
                            Documents: [{ DocumentNumber: ttn, Phone: "380958010474" }]
                        }
                    })
                });
                const json = await response.json();
                const info = json.data?.[0];
                console.log(info);
                if (info) {
                    setWeight(info.DocumentWeight ? `${info.DocumentWeight} кг` : "немає даних");
                    setPriceUAH(info.AnnouncedPrice || null);
                    setNpSenderAddress(info.SenderAddress || latest.Division);

                    const npTimeline = [];
                    if (info.TrackingUpdateDate
                    ) {
                        npTimeline.push({
                            type: 'nova',
                            status: info.Status,
                            date: info.TrackingUpdateDate

                        });
                    }
                
                   
                    // const formattedOur = reversedData.map((item) => ({
                    //     type: 'our',
                    //     status: item.Status,
                    //     date: item.created_at,
                    //     comment: item.Comment || null
                    // }));
//                    const formattedOur = Array.from(
//     reversedData.reduce((map, item) => {
//         if (!map.has(item.Status) || new Date(item.created_at) > new Date(map.get(item.Status)!.date)) {
//             map.set(item.Status, {
//                 type: 'our',
//                 status: item.Status,
//                 date: item.created_at,
//                 comment: item.Comment || null
//             });
//         }
//         return map;
//     }, new Map<string, { type: string, status: string, date: string, comment: string | null }>())
//     .values()
                    // );
                    const formattedOur = Array.from(
    reversedData.reduce((map, item) => {
        if (!item.Status || !item.created_at) return map;
                 
        let statusText = item.Status;

        if (item.Direction === 'UA-PL') {
            if (statusText === "Отримано на склад Іванком в Україні") {
                statusText = "Оброблено та очікує на міжнародне відправлення";
            } 
            if (statusText === "Отримана частково") {
                statusText = "В дорозі";
            } 
            else if (statusText === "Посилка, частини посилки вирушили на склад MED UA-") {
                statusText = "В дорозі до складу міжнародних відправлень Польщі";
            } 
            else if (statusText === "Готова до видачі" && item.DivisionTo === "MED UA-PL") {
                statusText = "Отримано на склад міжнародних відправлень та очікує на відправлення кур'єрською службою";
            } 
            else if (statusText === "Посилка видана отримувачу з складу MED UA-PL") {
                statusText = "Надана кур'єрській службі, для подальшого слідування";
            }
             else if (statusText === "Посилка, частини посилки вирушили на склад Катовіц") {
                statusText = "Посилка, частини посилки вирушили до складу в м. Катовіце";
            }
            else if (statusText === "Посилка видана отримувачу з складу Варшава UA-PL") {
                statusText = "Посилка видана отримувачу з складу в м. Варшава";
            }
              else if (statusText === "Посилка видана отримувачу з складу Катовіце UA-PL") {
                statusText = "Посилка видана отримувачу з складу в м. Катовіце";
            }
            else if (statusText === "Посилка, частини посилки вирушили на склад Кельце") {
                statusText = "Посилка видана отримувачу з складу в м. Кельце";
            }
           if (item.DivisionTo === "MED UA-PL") {
   
               setInpostAddress(item.Address);
}

        }
        if (item.Direction === 'PL-UA') {
            if (statusText === "Отримано на склад Іванком в Польщі") {
                statusText = "Отримано на склад Іванком в Польщі, та очікує відправлення в Україну";
            } 
            if (statusText === "Отримана частково") {
                statusText = "В дорозі";
            } 
            else if (statusText === "Готова до видачі") {
                statusText = "Надано кур'єрській службі для доставки по Україні";
            } 
             else if (statusText === "Посилка, частини посилки вирушили на склад Україна") {
                statusText = "Посилка, частини посилки вирушили на склад в Україну";
            } 
         }
        if (!map.has(statusText) || new Date(item.created_at) > new Date(map.get(statusText)!.date)) {
            map.set(statusText, {
                type: 'our',
                status: statusText,
                date: item.created_at,
                comment: item.Comment || null
            });
        }

        return map;
    }, new Map<string, { type: string, status: string, date: string, comment: string | null }>())
    .values() // <- обов'язково повернутися до .values()
                    ); 
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

                        setMergedTimeline([...formattedInpost, ...npTimeline, ...formattedOur]
                            .sort((a, b) => normalizeDate(b.date).getTime() - normalizeDate(a.date).getTime()));
                    } else if (latest.Direction === "PL-UA") {
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

                        setMergedTimeline([...formattedInpost, ...npTimeline, ...formattedOur]
                            .sort((a, b) => normalizeDate(b.date).getTime() - normalizeDate(a.date).getTime()));
                    }
                    else if (latest.Carrier === "dhl" && latest.CarrierTrackerNom) {
                        const timeline = await fetchDhlData(latest.CarrierTrackerNom);
                       
                        setMergedTimeline([...timeline, ...npTimeline, ...formattedOur]
                            .sort((a, b) => normalizeDate(b.date).getTime() - normalizeDate(a.date).getTime()));
                    }
                    else {
                        setMergedTimeline([...npTimeline, ...formattedOur]
                            .sort((a, b) => normalizeDate(b.date).getTime() - normalizeDate(a.date).getTime()));
                    }
                }
            } catch (err) {
                console.error("Помилка запиту до НП:", err);
            }
        };

        fetchNP();
    }, [ttn]);

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
        if (/^\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2}$/.test(date)) {
            const [d, m, y, time] = date.match(/(\d{2})-(\d{2})-(\d{4}) (\d{2}:\d{2}:\d{2})/)!.slice(1);
            return new Date(`${y}-${m}-${d}T${time}`);
        }
        if (/^\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}:\d{2}$/.test(date)) {
            const [d, m, y, time] = date.match(/(\d{2})\.(\d{2})\.(\d{4}) (\d{2}:\d{2}:\d{2})/)!.slice(1);
            return new Date(`${y}-${m}-${d}T${time}`);
        }
        return new Date(date);
    };
console.log(mergedTimeline);

    return (
        <div className={s.trackBox}>
            <div className={s.inner}>
                <div className={s.card}>
                    {/* <h2>Дані відправлення</h2> */}
                    <p><b>Номер відправлення:</b> {latest.TTN}</p>
                    <p><b>Дата відправлення:</b> {latest.DateDay}.{latest.DateMonth}.{latest.DateYear}</p>
                    <p><b>Відправлено з:</b> {npSenderAddress || latest.Division}</p>
                    <p><b>Отримання:</b> {inpostAddress || latest.DivisionTo}</p>
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
                                        ) : item.type === 'dhl' ? (
                                        <>
                                                    <p><b>DHL: {item.status}</b></p>
                                                    <p><b>Країна</b>:{item.country}</p>
                                                    <p><b>Місто:</b>{item.city}</p>
                                            <p>{new Date(item.date).toLocaleString()}</p>
                                        </>
                                    ):
                                            (
                                        <>
                                            <p><b>{item.status}</b></p>
                                            <p>{new Date(item.date).toLocaleString()}</p>
                                            {/* {item.comment && <p><i>{item.comment}</i></p>} */}
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
