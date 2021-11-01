import React, {useCallback, useEffect, useRef} from "react";
import AppPopup from "./AppPopup";
import {useRecoilState} from "recoil";
import {genericPopupState} from "../../global/recoil/atoms";

const AppGenericPopup: React.FC = () => {

  const [state, setState] = useRecoilState(genericPopupState);
  const {show, title, content, cancelButtonTitle, okButtonTitle, onPopupShow, onPopupDismiss} = state;
  const ref = useRef<HTMLDivElement>(null);
  const {current: element} = ref;

  const close = useCallback((result: boolean = false) => {
    const update = {...state};
    update.show = false;
    setState(update);
    onPopupDismiss?.(element, result);
  }, [element, state, setState, onPopupDismiss])

  useEffect(() => {
    if (show) onPopupShow?.(element, close);
  }, [show, onPopupShow, element, close]);

  return (
    <AppPopup
      isOpen={show}
      closePopup={close}
      className="contact-popup app-card"
      popupRef={ref}
    >
      {title && <h2>{title}</h2>}
      {content && <p>{content}</p>}
      {(cancelButtonTitle || okButtonTitle) &&
      <div className="flex-row-centered buttons-wrap">
        {cancelButtonTitle &&
        <button
            className="app-button clear"
            onClick={close.bind(null, false)}
        >{cancelButtonTitle}</button>}
        {okButtonTitle &&
        <button
            className="app-button clear"
            onClick={close.bind(null, true)}
        >{okButtonTitle}</button>}
      </div>}
    </AppPopup>
  )
}

export default AppGenericPopup;