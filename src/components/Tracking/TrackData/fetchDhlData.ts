// fetchDhlData.ts
import axios from "axios";
import uaStatuses from "./uastatus.json"; 
import { count } from "console";
interface UAStatus {
  Description: string;
  DescriptionUA: string;
}
// export const fetchDhlData = async (trackingNumber: string) => {
//   try {
//     const API_KEY = process.env.NEXT_PUBLIC_DHL_API_KEY; // Або зашитий ключ сюди, краще через env
//     const response = await axios.get(`https://api-eu.dhl.com/track/shipments?trackingNumber=${trackingNumber}`, {
//       headers: {
//         "DHL-API-Key": API_KEY,
//       },
//     });
//     console.log("🚚 DHL API Response:", response.data);
    
//     const shipment = response.data.shipments?.[0];

//     if (!shipment) return [];

//     const events = shipment.events || [];

//     const formattedDhl = events.map((event: any) => ({
//       type: 'dhl',
//       status: event.description,
//       date: event.timestamp,
//       location: event.location?.address?.addressLocality || null,
//     }));
//     console.log("🚚 Formatted DHL Data:", formattedDhl);
    
//     return formattedDhl;
//   } catch (error: any) {
//     console.error("❌ DHL API Error:", error.response?.data || error.message);
//     return [];
//   }
// };
// export const fetchDhlData = async (trackingNumber: string) => {
//   try {
//     const response = await axios.get(`https://api-eu.dhl.com/track/shipments?trackingNumber=${trackingNumber}&service=ecommerce-europe&language=en`, {
//       headers: {
//         'DHL-API-Key': process.env.NEXT_PUBLIC_DHL_API_KEY!,
//       },
//     });
// console.log("🚚 DHL API Response:", response.data);

//     const shipment = response.data.shipments?.[0];
//     if (!shipment) {
//       console.error("🚚 Немає даних по відправленню DHL");
//       return [];
//     }

//     // Якщо є події (events)
//     if (shipment.events && shipment.events.length > 0) {
//       const formatted = shipment.events.map((event: any) => ({
//         type: 'dhl',
//         status: event.description,
//         date: event.timestamp,
//         location: event.location?.address?.addressLocality || null,
//       }));
//       console.log("🚚 Formatted DHL Data:", formatted);
//       return formatted;
//     }

//     // Якщо подій немає, але є загальний статус
//     const fallbackFormatted = [{
//       type: 'dhl',
//       status: shipment.status?.description || 'Unknown status',
//       date: shipment.status?.timestamp || new Date().toISOString(),
//       location: shipment.status?.location?.address?.addressLocality || null,
//     }];

//     console.log("🚚 Formatted DHL Data (fallback):", fallbackFormatted);
//     return fallbackFormatted;

//   } catch (error: any) {
//     console.error('❌ Помилка запиту до DHL:', error.response?.data || error.message);
//     return [];
//   }
// };
const translateStatus = (status: string): string => {
  const match = (uaStatuses as UAStatus[]).find(item => item.Description === status);
  return match ? ` ${match.DescriptionUA}` : ` ${status}`; // якщо немає перекладу — залишає англійською
};

export const fetchDhlData = async (trackingNumber: string) => {
  try {
    const response = await axios.get(`https://api-eu.dhl.com/track/shipments?trackingNumber=${trackingNumber}&service=ecommerce-europe&language=en`, {
      headers: {
        'DHL-API-Key': process.env.NEXT_PUBLIC_DHL_API_KEY!,
      },
    });

    console.log("🚚 DHL API Response:", response.data);

    const shipment = response.data.shipments?.[0];
    if (!shipment) {
      console.error("🚚 Немає даних по відправленню DHL");
      return [];
    }

    if (shipment.events && shipment.events.length > 0) {
      const formatted = shipment.events.map((event: any) => ({
        type: 'dhl',
          status: translateStatus(event.description),
          country: event.location?.address?.countryCode || null,
          city: event.location?.address?.addressLocality || null,
        date: event.timestamp,
        location: event.location?.address?.addressLocality || null,
      }));

      console.log("🚚 Formatted DHL Data:", formatted);
      return formatted;
    }

    const fallbackFormatted = [{
      type: 'dhl',
      status: translateStatus(shipment.status?.description || 'Unknown status'),
      date: shipment.status?.timestamp || new Date().toISOString(),
      location: shipment.status?.location?.address?.addressLocality || null,
    }];

    console.log("🚚 Formatted DHL Data (fallback):", fallbackFormatted);
    return fallbackFormatted;

  } catch (error: any) {
    console.error('❌ Помилка запиту до DHL:', error.response?.data || error.message);
    return [];
  }
};