import {defaultRestDataResponse, recoilDefaultSetter} from "./utils";
import {SetterOrUpdater} from "recoil";

class RecoilService {

  private state: AppRecoilStateObj = {
    appDataState: [defaultRestDataResponse, recoilDefaultSetter<RestDataResponse>()],
    breadcrumbsState: [[], recoilDefaultSetter<Breadcrumb[]>()],
    genericPopupState: [{show: false}, recoilDefaultSetter<GenericPopup>()]
  }

  public setRecoilState(
    appDataState: RecoilStateReturn<RestDataResponse>,
    breadcrumbsState: RecoilStateReturn<Breadcrumb[]>,
    genericPopupState: RecoilStateReturn<GenericPopup>
  ) {
    this.state = {appDataState, breadcrumbsState, genericPopupState};
  }

  public getRecoilState(key: "appDataState"): RecoilStateReturn<RestDataResponse>;
  public getRecoilState(key: "breadcrumbsState"): RecoilStateReturn<Breadcrumb[]>;
  public getRecoilState(key: "genericPopupState"): RecoilStateReturn<GenericPopup>;

  public getRecoilState(key: AppRecallStateType): RecoilStateReturn<RestDataResponse | Breadcrumb[] | GenericPopup> {
    return this.state[key];
  }

  public launchGenericPopup(options: Omit<GenericPopup, "show">) {
    const {title, content, cancelButtonTitle, okButtonTitle, onPopupShow, onPopupDismiss} = options;
    const setState: SetterOrUpdater<GenericPopup> = this.state.genericPopupState[1];
    setState({show: true, title, content, cancelButtonTitle, okButtonTitle, onPopupShow, onPopupDismiss});
  }

  public confirmPopup(options: Omit<GenericPopup, "show">): Promise<boolean> {

    return new Promise<boolean>((resolve) => {

      const {onPopupDismiss, ...rest} = options;

      const handleDismiss = (element: HTMLDivElement, response: boolean) => {
        onPopupDismiss?.(element, response);
        return resolve(response);
      }

      this.launchGenericPopup({...rest, onPopupDismiss: handleDismiss});
    });
  }
}

export const recoilService = new RecoilService();