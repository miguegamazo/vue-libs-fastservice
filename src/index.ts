import { get, set } from "lodash";
import { ObjectId } from "mongodb";
import type { dataDB } from "@miguegamazo/lib-socket-fastservice";
export type tables = Record<string, any[]>;

export type crud = {
  action: "add" | "update" | "remove";
  collection: string;
  Id?: string;
  data?: any;
};
type CollectOp = "insert" | "update" | "delete";
export type data_crud = {
  method: "POST" | "PATCH";
  url: "/admin/pCollection" | "/admin/uCollection" | "/admin/rCollection";
  params: {
    collection: crud["collection"];
    data?: unknown;
    Id?: string;
  };
};

export type collect = Omit<
  dataDB<unknown>,
  "op" | "companyId" | "fullDocument"
> & {
  op: CollectOp;
  companyId: string;
  fullDocument: unknown;
};
export type User = {
  _id: string;
  username: string;
  password: string;
  initial_val?: string;
  expire_val?: string;
  area?: string;
  employerId?: string;
  employerName?: string;
  temp?: boolean;
  receiptId?: string;
  funcion?: string;
  companyId: string;
  logged_in?: boolean;
};

export type order_time = {
  open_interval: number[];
  margin_request: number;
  margin_cron: number;
};

export type weekHourly = {
  _id: number;
  start: string;
  end: string;
  closed: boolean;
  duration: number;
  name: string;
};

export type odoo_info = {
  url: string;
  port: number;
  db: string;
  username: string;
  password: string;
};

export type Discount = {
  id: string;
  name: string;
  qty: number;
  default: boolean;
};

export type Setting = {
  _id: string;
  logo: string;
  data: string;
  email: string;
  company_name: string;
  orders_time: order_time;
  dataCompany: {
    pais: number;
    nombre: string;
    direccion: string;
    provincia: number;
    municipio: string;
    poblacion: number;
    postal: string;
    telefono: string;
    email: string;
    cif: string;
    fiscalNombre: string;
    comercialNombre: string;
  };
  pdf: {
    d1: string;
    d2: string;
    d3: string;
    d4: string;
    d5: string;
  };
  cardLimit: string;
  prefix: string;
  prefixFp: string;
  weekHourly: weekHourly[];
  soundOrder: boolean;
  voiceOrder: boolean;
  odooConnect: boolean;
  odooData: odoo_info;
  tunneMessage?: string;
  discounts: Discount[];
  updatedBy: string;
};

export type option_types = "size" | "basic" | "extra";

export const optionsTypeTranslation: Record<option_types, string> = {
  size: "Tamaño",
  basic: "Ingredientes",
  extra: "Extras",
};

export type option = {
  _id: string;
  nombreInt: string;
  nombreExt: string;
  langId: string;
  recharge: number;
  type: option_types;
};

export type translation = {
  nombreInt: string;
  nombreExt: string;
  langId: string;
};

export type newOption = {
  _id: string;
  recharge: number;
  type: option_types;
  nombreInt: string;
  translators: translator[];
  active: boolean;
};

export type optionClient = {
  _id: string;
  recharge: number;
  type: option_types;
  nombreInt: string;
  nombreExt: string;
};

export type translator = {
  language_id: string;
  language_name: string;
  position: number;
  name: string;
};

export type language = {
  _id: string;
  name: string;
  flag: string;
  i18n: string;
};

export type image = {
  name: string;
  ext: string;
  size: number;
  type: string;
  lastModifiedData: string;
  src: string;
};

export type Article = {
  _id: string;
  int_available: boolean;
  ext_available: boolean;
  class_ids: number[];
  options: newOption[];
  category_id: string;
  category_name: string;
  nombreInt: string;
  nombreExt: string;
  receipt_id: string;
  receipt_name: string;
  allergens_ids: string[];
  pvp: number;
  pCost: number;
  translators: translator[];
  odooId: number;
  description: string;
  image: string;
  companyId: string;
  stock_control: boolean;
  updatedBy: string;
};

export type ArticleInClient = {
  _id: string;
  class_ids: number[];
  options: optionClient[];
  category_id: string;
  category_name: string;
  nombreInt: string;
  nombreExt: string;
  receipt_id: string;
  receipt_name: string;
  allergens_ids: string[];
  pvp: number;
  odooId: number;
  description: string;
  image: string;
};
export type Zone = {
  _id: string;
  name: string;
  letter: string;
  num_tables: number;
  recharge: number;
  companyId: string;
  active: boolean;
  updatedBy: string;
};

export type Employer = {
  _id: string;
  name: string;
  area: string;
  areaId: string;
  companyId: string;
  updatedBy: string;
};

export type period = {
  startC: string;
  startP: string;
  endC: string;
  endP: string;
};

export type Receipt = {
  _id: string;
  name: string;
  letter: string;
  periods: period;
  hourly: number;
  companyId: string;
  referencia?: string;
  updatedBy: string;
};
export type statusPartial = {
  status: rStatus;
  moment: string;
};

// export type pdfTicketInfo = {
// 	userId: string,
// 	pdfSource: string
// }
export type partialsForPay = {
  _id: string;
  articleId: string;
  nombreInt: string;
  nombreExt: string;
  categoryId: string;
  categoryName: string;
  receiptId: string;
  delivered: boolean;
  approved: boolean;
  pvp: number;
  pvpWD: number;
  qty: number;
  order_in_meal: number;
  read: boolean;
  ready: boolean;
  userId: string | null;
  odooId: number;
  selected: boolean;
  userPaid: string;
  paidOut: boolean;
  ticketId: string;
  payStatus: pS;
  options: optionItem[];
  roadStatus: statusPartial;
};

export type reason = {
  _id: string;
  label: string;
};
export type reasonsRecord = "r01" | "r02" | "r03";

export const reasons: Record<reasonsRecord, string> = {
  r01: "Llamar al Camarero",
  r02: "Pago en efectivo",
  r03: "Pago con tarjeta",
};

export type CallWaiter = {
  called: boolean;
  reason: reasonsRecord;
};
export type WaiterCalled = {
  mesa: string;
  reason: string;
  createdAt: Date;
};
export type WaiterCall = {
  mesa: string;
  reason: string;
  createdAt: Date;
  status: CallStatus;
  // NUEVOS (opcionales, con omitempty para compatibilidad)
  id: string;
  waiterID: string;
  acceptedAt: Date;
  arrivedAt: Date;
  resolvedAt: Date;
  verificationCode: string;
  verificationExpiresAt: Date;

  // Recordatorios
  reminderCount: number;
  nextReminder: Date;
  companyId: string;
};
export type Request = {
  _id: string;
  toPay: string[];
  pdfTicket: string;
  ticketId: string;
  userId: string;
};

export type pdfTicketInfo = {
  userId: string;
  pdfSource: string;
};
export type dataForPay = {
  paidOut: boolean;
  cardLimit: number;
  belowCardLimit: boolean;
  callWaiter: WaiterCalled;
  partialsForPay: Array<partialsForPay>;
  pdfTicket: pdfTicketInfo;
};

export type Client = {
  _id: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  cif: string;
  direccion: string;
  pais: number;
  provincia: number;
  municipio: string;
  poblacion: number;
  postal: string;
  telefono: string;
  email: string;
  companyId: string;
  updatedBy: string;
};
export type Ticket = {
  _id: string;
  ticket_num: string;
  ticket_id: string;
  total: number;
  cash: number;
  creditCard: number;
  paidOut: boolean;
  payClient: boolean;
  created_at: any;
  closed: boolean;
  partials: string[];
  companyId: string;
  mesa?: string;
  hasInvoice?: boolean;
  chargeId?: string;
  updatedBy: string;
};
export type status_order = {
  receipt_id: string;
  letter: string;
  status: number;
  partial_status: number;
  delivered: number;
  total: number;
};
export type client_situation = {
  locked: boolean;
  _id: string;
};

export type status_meal = {
  f: boolean;
  s: boolean;
};
export type Situation = {
  _id: string;
  zone_id: string;
  table_name: string;
  status: number;
  status_order: Array<status_order>;
  ticket: string;
  client: client_situation;
  actual_order_id: string;
  meal_in_order: boolean;
  status_meal: status_meal;
  dirty: boolean;
  external: boolean;
  hasOrder: boolean;
  canceledOrder: boolean;
  recharge?: number;
  src?: string;
  companyId: string;
  updatedBy: string;
};

export type voice = {
  voiceId: string;
};

export type message = {
  _id: number;
  receipt?: string;
  receiptId?: string;
  moment: string;
};

export type tableOrder = {
  tableId: string;
  table_name: string;
};

export type userItem = Pick<User, "_id" | "username">;

export type payToken = {
  ready: boolean;
  token: string;
};

export type Order = {
  _id: string;
  user: userItem;
  table: tableOrder;
  ticket: string;
  status: number;
  locked: boolean;
  created_at: string;
  dataForPay: dataForPay;
  messages: Array<message>;
  langId: string;
  payToken: payToken;
  listClients: Array<string>;
  message: string;
  companyId: string;
  voices: voice[];
  situationInUse?: boolean;
  readyTokenToPay?: boolean;
  requests: Request[];
  payStatus: pC;
  updatedBy: string;
};

export type Category = {
  _id: string;
  category_id: string;
  receipt_id: string;
  name: string;
  category_name: string;
  receipt_name: string;
  translators: translator[];
  companyId: string;
  referencia?: string;
  image: string;
  class_ids: string[];
  articles?: ArticleInClient[];
  updatedBy: string;
};

export type Allergen = {
  _id: string;
  name: string;
  image: string;
};
export type pais = {
  _id: any;
  "cod-pais-a2": string;
  "cod-pais-a3": string;
  "cod-pais-n3": number;
  pais: string;
};

export type provincia = {
  _id: any;
  "cod-pais-n3": number;
  "cod-prov": number;
  provincia: string;
  "cod-ca": number;
  "com-autonoma": string;
};

export type municipio = {
  _id: any;
  "cod-prov": number;
  "cod-mun-ine": string;
  "cod-mun-aeat": string;
  municipio: string;
};

export type poblacion = {
  _id: any;
  "cod-prov": number;
  "cod-pob": number;
  "cod-mun-ine": string;
  "cod-mun-aeat": string;
  municipio: string;
  poblacion: string;
};

export type Invoice = {
  _id: string;
  num_invoice: number;
  client_id: string;
  ticket_id: string;
  created_at: string;
  companyId: string;
  code: number;
  updatedBy: string;
};

export type Cash = {
  _id: string;
  openQty: number;
  closeQty: number;
  open_at: string;
  isClosed: boolean;
  close_at: string;
  totalCard: number;
  totalCash: number;
  companyId: string;
  updatedBy: string;
};

export type Base = {
  _id: string;
  category_id: string;
  name: string;
  src: string;
};

export type optionItem = {
  _id: string;
  recharge: number;
};

export type itemOrder = {
  _id: string;
  nombreInt: string;
  nombreExt: string;
  category_id: string;
  receipt_id: string;
  receipt_name: string;
  pvp: number;
  qty: number;
  position: string;
  order_in_meal: number;
  odooId: number;
  options: optionItem[];
  user: string;
};

// export const updatePropertiesInOrder = (table: tables, list: any) => {
//   for (const key in list) {
//     set(table, key, list[key])
//   }
//   return table
// }
export const orderStatusMessages = [
  { _id: 0, value: true },
  { _id: 1, value: false },
  { _id: 2, value: false },
  { _id: 3, value: false },
  { _id: 4, value: false },
  { _id: 5, value: false },
];
export const tableStatus = [
  { _id: 0, status: "close", color: "green" },
  { _id: 1, status: "open", color: "red" },
];

export const messagesOrderTypes = [
  { _id: 0, value: true },
  { _id: 1, value: false },
  { _id: 2, value: false },
  { _id: 3, value: false },
  { _id: 4, value: false },
  { _id: 5, value: false },
];
export type rStatus = "r00" | "r01" | "r02" | "r03" | "r04" | "r05" | "r06";
export type rS = {
  status: string;
  color:
    | "red-5"
    | "pink-5"
    | "yellow-5"
    | "amber-5"
    | "brown-5"
    | "green-5"
    | "deep-purple-5";
};

export const roadStatus: Record<rStatus, rS> = {
  r00: { status: "Pendiente Aprobacion", color: "red-5" },
  r01: { status: "aprobado", color: "pink-5" },
  r02: { status: "En proceso", color: "yellow-5" },
  r03: { status: "Finalizado", color: "amber-5" },
  r04: { status: "Recogido/En Entrega", color: "brown-5" },
  r05: { status: "Entregado", color: "green-5" },
  r06: { status: "Pagado", color: "deep-purple-5" },
};

export const orderStatus = [
  { _id: 0, status: "Solicitado", color: "red" },
  { _id: 1, status: "En proceso", color: "yellow" },
  { _id: 2, status: "Finalizado", color: "orange" },
  { _id: 3, status: "Recogido", color: "green" },
];

export const orderStatusTable = [
  { _id: 0, status: "Ninguno", color: "grey" },
  { _id: 1, status: "Pendiente", color: "red" },
  { _id: 2, status: "Leido", color: "yellow" },
  { _id: 3, status: "Listo", color: "green" },
];
export const paymentMethods: Record<string, string> = {
  r0: "Efectivo",
  r1: "Tarjeta",
};
export function roundPrice(p: number) {
  return Math.trunc(p * 100) / 100;
}

export const mealOrder: Record<string, string> = {
  m0: "pedido",
  m1: "entrante",
  m2: "primero",
  m3: "segundo",
};

export type pC = "p000" | "p999" | "p555" | "p111" | "p222" | "p333";
export const payCodes: Record<pC, string> = {
  p000: "Pago Efectivo por Cliente al Camarero",
  p111: "Pago no completado",
  p999: "Pago Tarjeta por Cliente al Camarero",
  p555: "Pago Tarjeta por Cliente en Stripe",
  p222: "Pago Parcial",
  p333: "Pendiente Pago",
};

export type pS = "p00" | "p11" | "p21" | "p02" | "p03" | "p04";
export type pSRecord = {
  value: string;
  color: string;
};
export const payStatus: Record<pS, pSRecord> = {
  p00: { value: "Pendiente Pago", color: "red-5" },
  p11: { value: "Seleccionado Camarero", color: "cyan-5" },
  p21: { value: "Seleccionado Cliente", color: "teal-5" },
  p02: { value: "Proceso Pago", color: "purple-5" },
  p03: { value: "Pagado Cliente", color: "green-5" },
  p04: { value: "Pagado en Caja", color: "light-green-5" },
};
export type CallStatus =
  | "pending"
  | "accepted"
  | "onTheWay"
  | "arrived"
  | "canceled"
  | "expired";
export const nameRules = [(v: string) => !!v || "Nombre es requerido"];
export const itemRules = [(v: string) => !!v || "Item es requerido"];
export const emailRules = [
  (v: string) => /.+@.+\..+/.test(v) || "E-mail debe de ser valido",
];
export const cifRules = [
  (v: string) =>
    /^(\d{8})([A-Z])$/.test(v) ||
    /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/.test(v) ||
    "CIF o DNI debe ser valido",
];

export type updateOne = {
  orderId: string;
  partialId: string;
  selected: boolean;
  userId: string;
  pS: pS;
};

export type updateAll = {
  orderId: string;
  selected: boolean;
  userId: string;
  pS: pS;
};

export interface Mesa extends Situation {
  label: string;
  color: string;
  index: number;
  arrivalTime: string;
  productCount?: number; // Opcional porque las mesas vacías no tienen este atributo
}
export const titleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

export const diff_minutes = (dt2: Date, dt1: Date) => {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
};

export function joinItems(item: itemOrder, list: itemOrder[]): itemOrder[] {
  const idx = list.findIndex(
    (x) =>
      x._id === item._id &&
      x.order_in_meal === item.order_in_meal &&
      JSON.stringify(x.options) === JSON.stringify(item.options),
  );
  const maxValue = getMaxValue(list.map((x) => x.position));
  if (idx === -1) {
    item.position = (maxValue + 1).toString();
    list.push(item);
  } else {
    list[idx].qty += item.qty;
  }
  return list;
}

export function calcTotalPrice(item: itemOrder) {
  const total: number[] = [];
  for (const k of item.options) {
    total.push(k.recharge);
  }
  const partial = total.reduce((a, b) => a + b, 0);
  return roundPrice(item.pvp + partial);
}

export function calcTotalOrder(list: itemOrder[]) {
  const total: number[] = [];
  for (const itemOrder of list) {
    const partial = calcTotalPrice(itemOrder);
    total.push(roundPrice(partial * itemOrder.qty));
  }
  return roundPrice(total.reduce((a, b) => a + b, 0));
}

export function calcDuration(start: string, finish: string): number {
  const start_0 = new Date();
  const end_0 = new Date();
  const start_00 = start.split(":");
  start_0.setHours(parseInt(start_00[0]), parseInt(start_00[1]), 0);
  const end_00 = finish.split(":");
  end_0.setHours(parseInt(end_00[0]), parseInt(end_00[1]), 0);
  const date_1 = start_0.getTime();
  const date_2 = end_0.getTime();

  if (date_2 < date_1) {
    end_0.setDate(end_0.getDate() + 1);
    return diff_minutes(end_0, start_0);
  }
  return diff_minutes(end_0, start_0);
}

export function getMaxValue(val: string[]): number {
  const list = val.map((x) => Number(x));
  return list.length === 0 ? 0 : Math.max(...list);
}

export const updatePropertiesInTable = (
  target: tables | Order | Article | Mesa,
  updates: Record<string, unknown>,
) => {
  try {
    const arraysToRefresh = new Set<string>();
    for (const key in updates) {
      const value = updates[key];
      const parentPath = key.split(".").slice(0, -1).join(".");
      const propName = key.split(".").pop()!;
      const parentObj = parentPath ? get(target, parentPath) : target;

      if (parentObj && Array.isArray(value)) {
        parentObj[propName] = [...value]; // siempre que el update sea array
        continue;
      } else {
        set(target, key, value);
      }
      const parts = key.split(".");
      const idxPos = parts.findIndex((p) => /^\d+$/.test(p));
      if (idxPos > 0) arraysToRefresh.add(parts.slice(0, idxPos).join("."));
    }
    for (const path of arraysToRefresh) {
      const arr = get(target, path);
      if (Array.isArray(arr)) set(target, path, [...arr]);
    }
  } catch (e) {
    console.error("Error in updatePropertiesInTable:", e, {
      target,
      updates,
    });
    throw e;
  }
  return target;
};
export const base64ToBlob = (b64: string, mime = "audio/webm") => {
  // si viene como dataURL, lo usaremos tal cual (no crear Blob aquí)
  if (b64.startsWith("data:")) return null as unknown as Blob;
  const bin = atob(b64);
  const u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  return new Blob([u8], { type: mime });
};
export type Rec = Record<string, any>;

const isIndex = (s: string) => /^\d+$/.test(s);

function dotGet(obj: any, path: string): any {
  if (obj == null) return undefined;
  const segs = path.split(".");
  let cur = obj;
  for (const s of segs) {
    const k = isIndex(s) ? +s : s;
    if (cur == null) return undefined;
    cur = cur[k as any];
  }
  return cur;
}

type Dict = Record<string, unknown>;

const isPlainObject = (v: unknown): v is Dict =>
  Object.prototype.toString.call(v) === "[object Object]";

/** Merge profundo sin mutar el original. Acepta arrays y objetos “planos”. */
export function deepMerge<T extends Dict, U extends Dict>(
  target: T,
  source: U,
): T & U {
  const out: Dict = { ...(target as Dict) };

  for (const [k, v] of Object.entries(source)) {
    const prev = out[k];

    if (Array.isArray(v)) {
      // sobreescribe arrays (o copia)
      out[k] = [...v];
    } else if (isPlainObject(v) && isPlainObject(prev)) {
      // merge recursivo cuando ambos son objetos
      out[k] = deepMerge(prev as Dict, v);
    } else if (isPlainObject(v)) {
      // si antes no era objeto, lo sustituimos
      out[k] = deepMerge({}, v);
    } else {
      // primitivos / funciones / fechas, etc.
      out[k] = v as unknown;
    }
  }

  return out as T & U;
}

function dotSet(target: any, path: string, value: any) {
  const segs = path.split(".");
  let cur = target;
  for (let i = 0; i < segs.length; i++) {
    const seg = isIndex(segs[i]) ? +segs[i] : segs[i];
    const last = i === segs.length - 1;
    const nextIsIndex = !last && isIndex(segs[i + 1]);

    if (last) {
      if (value && typeof value === "object" && !Array.isArray(value)) {
        cur[seg] = deepMerge(
          cur[seg] && typeof cur[seg] === "object" ? cur[seg] : {},
          value,
        );
      } else {
        cur[seg] = value;
      }
      return;
    }

    if (!(seg in cur) || cur[seg] == null) {
      cur[seg] = nextIsIndex ? [] : {};
    } else {
      if (nextIsIndex && !Array.isArray(cur[seg])) cur[seg] = [];
      if (
        !nextIsIndex &&
        (Array.isArray(cur[seg]) || typeof cur[seg] !== "object")
      )
        cur[seg] = {};
    }

    cur = cur[seg];

    if (Array.isArray(cur)) {
      const idx = Number(segs[i + 1]);
      if (Number.isFinite(idx) && cur.length <= idx) cur.length = idx + 1;
    }
  }
}
export function dotHas(obj: unknown, path: string): boolean {
  if (obj == null) return false;
  const segs = path.split(".");
  let cur: any = obj;
  for (const s of segs) {
    const key: any = /^\d+$/.test(s) ? +s : s;
    if (typeof cur !== "object" || cur === null || !(key in cur)) return false;
    cur = cur[key];
  }
  return true;
}
/** Expande updatedFields (dot-keys + objetos padre) y opcionalmente mergea sobre un doc base */
export function expandUpdatedFields(uf: Rec, mergeWith?: Rec): Rec {
  const out: Rec = mergeWith ? deepMerge({}, mergeWith) : {};
  if (!uf) return out;
  for (const [k, v] of Object.entries(uf))
    if (!k.includes(".")) {
      if (v && typeof v === "object" && !Array.isArray(v))
        out[k] = deepMerge(out[k] ?? {}, v);
      else out[k] = v;
    }
  for (const [k, v] of Object.entries(uf))
    if (k.includes(".")) dotSet(out, k, v);
  return out;
}

/** Aplica removedFields (paths) sobre un objeto ya expandido */
function applyRemovedFields(target: Rec, removed: string[] = []) {
  for (const path of removed) {
    const segs = path.split(".");
    let cur: any = target;
    for (let i = 0; i < segs.length - 1; i++) {
      if (cur == null) break;
      cur = cur[isIndex(segs[i]) ? +segs[i] : segs[i]];
    }
    if (cur) delete cur[segs.at(-1)!];
  }
  return target;
}

/** Obtiene un valor desde updatedFields con soporte para dot-keys u objeto padre */
export function getFromUpdatedFields<T = any>(
  uf: Rec,
  path: string,
): T | undefined {
  if (!uf) return undefined;
  if (Object.prototype.hasOwnProperty.call(uf, path)) return uf[path] as T;

  const segs = path.split(".");
  for (let i = segs.length - 1; i > 0; i--) {
    const parentKey = segs.slice(0, i).join(".");
    const rest = segs.slice(i).join(".");
    const parentVal = uf[parentKey];
    if (parentVal && typeof parentVal === "object") {
      const v = dotGet(parentVal, rest);
      if (v !== undefined) return v as T;
    }
  }

  const prefix = path + ".";
  const matches = Object.keys(uf).filter((k) => k.startsWith(prefix));
  if (matches.length) {
    const result: Rec = {};
    for (const k of matches) dotSet(result, k.slice(prefix.length), uf[k]);
    return result as T;
  }
  return undefined;
}

/** Lee desde updatedFields y, si no está, cae a fullDocument */
function readFromChange<T = any>(change: Rec, path: string): T | undefined {
  const uf: Rec =
    change.updateDescription?.updatedFields ?? change.updatedFields ?? {};
  const v = getFromUpdatedFields<T>(uf, path);
  return v !== undefined ? v : dotGet(change.fullDocument, path);
}

export type mCC =
  | "b100"
  | "b50"
  | "b20"
  | "b10"
  | "b5"
  | "m2"
  | "m1"
  | "m05"
  | "m02"
  | "m01"
  | "m005"
  | "m002"
  | "m001";
export type CC = {
  label: string;
  qty: number;
  value: number;
};
export const CURRENCY_CASH: Record<mCC, CC> = {
  b100: { label: "B. 100", qty: 0, value: 100 },
  b50: { label: "B. 50", qty: 0, value: 50 },
  b20: { label: "B. 20", qty: 0, value: 20 },
  b10: { label: "B. 10", qty: 0, value: 10 },
  b5: { label: "B. 5", qty: 0, value: 5 },
  m2: { label: "M. 2", qty: 0, value: 2 },
  m1: { label: "M. 1", qty: 0, value: 1 },
  m05: { label: "M. 50c", qty: 0, value: 0.5 },
  m02: { label: "M. 20c", qty: 0, value: 0.2 },
  m01: { label: "M. 10c", qty: 0, value: 0.1 },
  m005: { label: "M. 5c", qty: 0, value: 0.05 },
  m002: { label: "M. 2c", qty: 0, value: 0.02 },
  m001: { label: "M. 1c", qty: 0, value: 0.01 },
};
export type Net = {
  sent: number;
  recv: number;
};

export type Disk = {
  path: string;
  fs: string;
  total: number;
  used: number;
  usedPerc: number;
  free: number;
};

export type Mem = {
  total: number;
  available: number;
  used: number;
  free: number;
};

export type StateServer = {
  _id: string;
  net: Net;
  cpu: number[];
  disk: Disk;
  mem: Mem;
  epoch: number;
};

export type infoState = {
  BlockIO: string;
  CPUPerc: string;
  Container: string;
  ID: string;
  MemPerc: string;
  MemUsage: string;
  Name: string;
  NetIO: string;
  PIDs: string;
};

export type StateDocker = {
  _id: string;
  info: infoState[];
  epoch: number;
};

export type StatsWg = {
  _id: string;
  name: string;
  ip: string;
  handshake: string;
  pubkey: string;
  transferrx: number;
  transfertx: number;
};

export type SRequests = {
  _id: ObjectId;
  hour: number;
  count: number;
};

export type NewClient = {
  _id: string;
  email: string;
  comercialNombre: string;
  fiscalNombre: string;
  cif: string;
  direccion: string;
  postal: string;
  pais: number;
  provincia: number;
  municipio: string;
  poblacion: number;
  nombre: string;
  telefono: string;
};

export type situationSAdmin = {
  _id: string;
  table_name: string;
};
export type clientSAdmin = {
  _id: string;
  name: string;
};

export type ResponseSit = {
  data: {
    result: situationSAdmin[];
  };
};

export type ResponseData = {
  data: {
    result: any;
  };
};

export type ResponseClient = {
  data: {
    result: clientSAdmin[];
  };
};

export type responseSocket = {
  verb: string;
  collection: string;
  data: never[];
  id?: string;
};
export type Statuses = {
  ufuture: boolean;
  nfuture: boolean;
  checkBoot: boolean;
  loadBoot: boolean;
};

export type Future = {
  _id: string;
  email: string;
  comercial_name: string;
  mac: string;
  created_at: string;
  updated_at: string;
  initial_update: boolean;
  ready: boolean;
  status: Statuses;
};
export type employerTech = {
  _id: string;
  name: string;
  connected: boolean;
  via: number;
};

export type Technical = {
  _id: string;
  employers: employerTech[];
  wifi: number;
  sim: number;
  int_ext: boolean;
  companyId: string;
};

export type TableSAdmin = Record<
  | "settings"
  | "future"
  | "technical"
  | "state_server"
  | "state_docker"
  | string,
  | clientSAdmin[]
  | Future[]
  | Technical[]
  | StateServer[]
  | StateDocker[]
  | any[]
>;

export type TableName = {
  zone_name: string;
  table_name: string;
  zone_id: string;
  ticket: string;
  table_id: string;
  status: number;
};

export function getThemeByHostname(): "primary" | "secondary" {
  const hostname = window.location.hostname;

  if (hostname.includes("fastservice.menu")) return "primary";
  if (hostname.includes("hostel-less.com")) return "secondary";
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(hostname)) return "primary"; // IP tipo 192.168.1.10

  return "primary"; // fallback seguro
}

export interface Copia {
  _id: string;
  invoice_num: number;
  ticket_num: number;
  companyId: string;
  updatedBy: string;
}
