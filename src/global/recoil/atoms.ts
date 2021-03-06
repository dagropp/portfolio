import {atom} from "recoil";
import {defaultRestDataResponse} from "./utils";

export const appDataState = atom<RestDataResponse>({
  key: "appDataState",
  default: defaultRestDataResponse
});

export const breadcrumbsState = atom<Breadcrumb[]>({
  key: "breadcrumbsState",
  default: []
});

export const genericPopupState = atom<GenericPopup>({
  key: "genericPopupState",
  default: {show: false}
});