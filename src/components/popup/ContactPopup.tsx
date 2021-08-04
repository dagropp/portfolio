import React, {useEffect, useState} from "react";
import AppPopup from "./AppPopup";
import {userService} from "../../global/UserService";
import {storageService} from "../../global/StorageService";

const ContactPopup: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [didLaunch, setDidLaunch] = useState(false);

  useEffect(() => {
    const clickHandler = () => {
      if (!didLaunch && storageService.get("enable_contact_popup") && userService.getSecondsSinceLaunch() > 10) {
        setDidLaunch(true);
        window.setTimeout(() => setIsOpen(true), 2000);
      }
    }
    document.addEventListener("click", clickHandler, {once: didLaunch});
    return () => document.removeEventListener("click", clickHandler);
  }, [didLaunch])

  const disablePopup = () => {
    storageService.set("enable_contact_popup", false);
    setIsOpen(false);
  }

  return (
    <AppPopup isOpen={isOpen} setIsOpen={setIsOpen} className="contact-popup app-card">
      <h2>Looks like you're interested...</h2>
      <div className="message-wrap">
        <form action="">
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Leave a Message"
          />
          <button type="submit">Send</button>
          <button type="button" onClick={() => setIsOpen(false)}>Dismiss</button>
        </form>
        <a onClick={disablePopup}>Don't Show Again</a>
      </div>
    </AppPopup>
  )
}

export default ContactPopup;