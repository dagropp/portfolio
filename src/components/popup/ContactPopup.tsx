import React, {ChangeEvent, EventHandler, FormEvent, MouseEventHandler, useEffect, useState} from "react";
import AppPopup from "./AppPopup";
import {userService} from "../../global/UserService";
import {storageService} from "../../global/StorageService";
import ServerService from "../../global/ServerService";
import useValidation, {EMAIL_REGEX} from "../../hooks/useValidation";

const ContactPopup: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [didLaunch, setDidLaunch] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [isEmailValid, handleEmailChange] = useValidation({regexp: EMAIL_REGEX, validationFn: (val) => !val})
  const [isMessageValid, handleMessageChange] = useValidation({validationFn: (val) => encodeURI(val).length <= 1000});

  useEffect(() => {
    const clickHandler = () => {
      if (!didLaunch && storageService.get("enable_contact_popup") && userService.getSecondsSinceLaunch() > 10) {
        setDidLaunch(true);
        window.setTimeout(() => setIsOpen(true), 2000);
      }
    }
    document.addEventListener("click", clickHandler, {once: didLaunch});
    return () => document.removeEventListener("click", clickHandler);
  }, [didLaunch]);

  const handleSubmit: EventHandler<FormEvent<HTMLFormElement>> = (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    if (!Array.from(formData.values()).some(entry => entry)) return;
    const data = {
      email: formData.get("email"),
      message: encodeURI(formData.get("message") as string ?? "")
    }
    ServerService.post("send_contact_message", data)
      .then(console.log);
  }

  const disablePopup: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    storageService.set("enable_contact_popup", false);
    setIsOpen(false);
  }

  const handleFormChange: EventHandler<ChangeEvent<HTMLFormElement>> = (event) => {
    const formData = new FormData(event.target.form);
    setDisabled(!Array.from(formData.values()).some(entry => entry));
  }

  return (
    <AppPopup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="contact-popup app-card"
    >
      <h2>Looks like you're interested...</h2>
      <div className="message-wrap">
        <form
          onChange={handleFormChange}
          onSubmit={handleSubmit}
        >
          <label
            className={isEmailValid ? "" : "error"}
            htmlFor="email"
            data-placeholder="Your Email"
            data-error="Email address is invalid"
          >
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Your Email"
              onChange={handleEmailChange}
            />
          </label>
          <label
            className={isMessageValid ? "" : "error"}
            htmlFor="message"
            data-placeholder="Leave a Message"
            data-error="Message contains too many characters."
          >
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Leave a Message"
              onChange={handleMessageChange}
            />
          </label>
          <div
            className="form-footer flex-row-centered"
          >
            <button
              type="submit"
              disabled={disabled || !isMessageValid || !isEmailValid}
            >Send
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
            >Dismiss
            </button>
          </div>
        </form>
        <a href="#"
           className="dismiss"
           onClick={disablePopup}
        >Don't Show Again</a>
      </div>
    </AppPopup>
  )
}

export default ContactPopup;