export async function fetchInPostData(trackingNumber: string) {
    try {
        const response = await fetch(
            `https://api-shipx-pl.easypack24.net/v1/tracking/${trackingNumber}`,
            {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                },
            }
        );

        if (!response.ok) throw new Error("InPost API Error");

        const data = await response.json();

        // нормалізуємо масив для нашого таймлайну
        const timeline = data.tracking_details?.map((item: any) => ({
            status: item.status,
            origin_status: item.origin_status,
            location: item.location,
            datetime: item.datetime,
        })) || [];

        return timeline;

    } catch (error) {
        console.error("Помилка запиту до InPost API:", error);
        return []; // якщо помилка — повертаємо пустий масив
    }
}
export const inpostStatusMap: Record<string, string> = {
    "created": "Створено",
    "offers_prepared": "Пропозиції підготовлені",
    "offer_selected": "Пропозиція вибрана",
    "confirmed": "Створено та Підтверджено",
    "ready_to_pickup_from_pok": "Готова до видачі з пункту прийому",
    "oversized": "Перевищено габарити",
    "dispatched_by_sender_to_pok": "Передано відправником у пункт прийому",
    "dispatched_by_sender": "Відправлено відправником",
    "collected_from_sender": "Забрано відправлення у відправника",
    "taken_by_courier": "Забрано кур'єром",
    "adopted_at_source_branch": "Прийнято на вихідній філії",
    "sent_from_source_branch": "Відправлено з вихідної філії",
    "readdressed": "Перенаправлено",
    "out_for_delivery": "Доставляється",
    "ready_to_pickup": "Готово до видачі",
    "pickup_reminder_sent": "Нагадування про видачу",
    "pickup_time_expired": "Термін отримання минув",
    "avizo": "Повідомлення про прибуття",
    "taken_by_courier_from_pok": "Забрано кур'єром з пункту прийому",
    "rejected_by_receiver": "Відхилено одержувачем",
    "undelivered": "Не доставлено",
    "delay_in_delivery": "Затримка доставки",
    "returned_to_sender": "Повернено відправнику",
    "ready_to_pickup_from_branch": "Готово до видачі з філії",
    "delivered": "Доставлено",
    "canceled": "Скасовано",
    "claimed": "Розпочато претензію",
    "stack_in_customer_service_point": "Залишено в пункті обслуговування клієнтів",
    "stack_parcel_pickup_time_expired": "Термін зберігання посилки минув",
    "unstack_from_customer_service_point": "Посилку знято з пункту обслуговування клієнтів",
    "courier_avizo_in_customer_service_point": "Повідомлення кур'єра в пункті обслуговування",
    "taken_by_courier_from_customer_service_point": "Забрано кур'єром з пункту обслуговування",
    "stack_in_box_machine": "Посилка у поштоматі",
    "stack_parcel_in_box_machine_pickup_time_expired": "Термін зберігання в поштоматі минув",
    "unstack_from_box_machine": "Посилку знято з поштомату",
    "adopted_at_sorting_center": "Прийнято на сортувальному центрі",
    "out_for_delivery_to_address": "Доставляється за адресою",
    "pickup_reminder_sent_address": "Нагадування про видачу за адресою",
    "undelivered_wrong_address": "Не доставлено (невірна адреса)",
    "undelivered_cod_cash_receiver": "Не доставлено (відмова від оплати)",
    "redirect_to_box": "Перенаправлено у поштомат",
    "canceled_redirect_to_box": "Скасовано перенаправлення у поштомат"
};
