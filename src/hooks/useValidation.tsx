import {ChangeEvent, EventHandler, useState} from "react";

export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface ValidationHookOptions {
  regexp?: RegExp;
  validationFn?: (value: string) => boolean;
  initialValue?: boolean;
}

type HTMLTextElement = HTMLInputElement | HTMLTextAreaElement;

type ValidationHookValue = [
  boolean,
  EventHandler<ChangeEvent<HTMLTextElement>>
];

const useValidation = (options: ValidationHookOptions = {}): ValidationHookValue => {

  const {regexp, validationFn, initialValue = true} = options;
  const [isValid, setIsValid] = useState(initialValue);

  const handleChange: EventHandler<ChangeEvent<HTMLTextElement>> = (event) => {
    const {value} = event.target;
    const isFnValid = validationFn?.(value) ?? true;
    const isRegexpValid = regexp?.test(value) ?? true;
    setIsValid(isFnValid || isRegexpValid);
  }

  return [isValid, handleChange];
}

export default useValidation;