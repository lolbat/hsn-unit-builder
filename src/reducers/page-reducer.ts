import Action from "./actions";

export interface PageState {
  currentPage: string;
  previousPage: string | null;
}

export const initialPageState: PageState = {
  currentPage: "",
  previousPage: null,
};

export type PageAction = { type: "page-change"; newPage: string };

export function isPageAction(a: Action): a is PageAction {
  return a.type === "page-change";
}

export default function PageReducer(state: PageState, action: PageAction) {
  switch (action.type) {
    case "page-change": {
      const newState: PageState = {
        currentPage: action.newPage,
        previousPage: state.currentPage,
      };
      return newState;
    }
    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
}
