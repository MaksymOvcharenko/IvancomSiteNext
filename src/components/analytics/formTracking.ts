// src/analytics/formTracking.ts

type BaseEvent = {
  event: string;
  formId: string;
};

function pushToDataLayer(payload: BaseEvent) {
  if (typeof window === "undefined") return;
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push(payload);
}

/**
 * Україна → Польща
 */
export function trackUaPlFormSuccess() {
  pushToDataLayer({
    event: "iv_form_submit_success_ua_pl",
    formId: "ua-pl",
  });
}

/**
 * Польща → Україна
 */
export function trackPlUaFormSuccess() {
  pushToDataLayer({
    event: "iv_form_submit_success_pl_ua",
    formId: "pl-ua",
  });
}

/**
 * Переїзди (Relocations)
 */
export function trackRelocationFormSuccess() {
  pushToDataLayer({
    event: "iv_form_submit_success_relocation",
    formId: "relocation",
  });
}

/**
 * Тварини (Animals)
 */
export function trackAnimalsFormSuccess() {
  pushToDataLayer({
    event: "iv_form_submit_success_animals",
    formId: "animals",
  });
}
