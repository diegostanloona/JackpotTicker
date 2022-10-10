export interface App {
  error: null | string;
}

export enum AppActions {
  ERROR = 'ERROR',
}

interface AppActionType<T, P> {
  type: T;
  payload: P;
}

export type AppAction =
  AppActionType<typeof AppActions.ERROR, {
    message: string
    name: string;
  }>;