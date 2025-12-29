import { createContext, useContext, useReducer } from "react";

export type Extra = {
  id: number;
  title: string;
  text: string;
  price: number;
  status: boolean;
};

type ExtraAction = {
  type: "changed";
  id: number;
};

const ExtrasContext = createContext<Extra[] | null>(null);
const ExtrasDispatchContext = createContext<React.Dispatch<ExtraAction>>(
  {} as React.Dispatch<ExtraAction>
);

export function ExtrasProvider({ children }: { children: React.ReactNode }) {
  const [extras, dispatch] = useReducer(extrasReducer, initialExtras);

  return (
    <ExtrasContext.Provider value={extras}>
      <ExtrasDispatchContext.Provider value={dispatch}>
        {children}
      </ExtrasDispatchContext.Provider>
    </ExtrasContext.Provider>
  );
}

export function useExtras() {
  return useContext(ExtrasContext);
}

export function useExtrasDispatch() {
  return useContext(ExtrasDispatchContext);
}

function extrasReducer(extras: Extra[], action: ExtraAction): Extra[] {
  switch (action.type) {
    case "changed":
      return extras.map((e) => {
        if (e.id === action.id) {
          e.status = true;
        }
        return e;
      });
    default:
      return extras;
  }
}

const initialExtras = [
  {
    id: 0,
    title: "Страхование",
    text: "Страхование на время перелёта",
    price: 910,
    status: false,
  },
  {
    id: 1,
    title: "Выбор места на рейс",
    text: "Выбор мест по вашим приоритетам",
    price: 500,
    status: false,
  },
  {
    id: 2,
    title: "Дополнительное место багажа",
    text: "Дополнительный сдаваемый багаж",
    price: 120,
    status: false,
  },
  {
    id: 3,
    title: "SMS оповещение",
    text: "SMS-сообщение",
    price: 100,
    status: false,
  },
];
