import {defaultRestDataResponse, recoilDefaultSetter} from "./utils";

class RecoilService {

  private state: AppRecoilStateObj = {
    appDataState: [defaultRestDataResponse, recoilDefaultSetter<RestDataResponse>()],
    breadcrumbsState: [[], recoilDefaultSetter<Breadcrumb[]>()]
  }

  public setRecoilState(appDataState: RecoilStateReturn<RestDataResponse>, breadcrumbsState: RecoilStateReturn<Breadcrumb[]>) {
    this.state = {appDataState, breadcrumbsState};
  }

  public getRecoilState(key: "appDataState"): RecoilStateReturn<RestDataResponse>;
  public getRecoilState(key: "breadcrumbsState"): RecoilStateReturn<Breadcrumb[]>;

  public getRecoilState(key: AppRecallStateType): RecoilStateReturn<RestDataResponse | Breadcrumb[]> {
    return this.state[key];
  }
}

export const recoilService = new RecoilService();