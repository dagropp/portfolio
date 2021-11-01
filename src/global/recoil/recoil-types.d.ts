type RecoilStateReturn<T> = [T, SetterOrUpdater<T>];
type AppRecallStateType = "appDataState" | "breadcrumbsState" | "genericPopupState";

interface AppRecoilStateObj {
  appDataState: RecoilStateReturn<RestDataResponse>;
  breadcrumbsState: RecoilStateReturn<Breadcrumb[]>;
  genericPopupState: RecoilStateReturn<GenericPopup>;
}

interface GenericPopup {
  show: boolean;
  title?: string;
  content?: string;
  okButtonTitle?: string;
  cancelButtonTitle?: string;
  onPopupShow?(element: Nullable<HTMLDivElement>, dismiss: (result?: boolean) => void): void;
  onPopupDismiss?(element: Nullable<HTMLDivElement>, result: boolean): void;
}