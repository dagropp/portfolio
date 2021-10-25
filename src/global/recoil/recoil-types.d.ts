type RecoilStateReturn<T> = [T, SetterOrUpdater<T>];
type AppRecallStateType = "appDataState" | "breadcrumbsState";

interface AppRecoilStateObj {
  appDataState: RecoilStateReturn<RestDataResponse>,
  breadcrumbsState: RecoilStateReturn<Breadcrumb[]>
}