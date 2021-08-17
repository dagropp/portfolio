class CustomEventsService {
  public static dispatch(type: "filesChanged", detail: { count: number }, element: EventTarget): void;

  public static dispatch(type: "test", detail: { test: boolean }, element: EventTarget): void;

  public static dispatch(type: CustomEventType, detail: any, element: EventTarget = window) {
    const event = new CustomEvent(type, {detail});
    element.dispatchEvent(event);
  }

  public static addListener(element: EventTarget, type: CustomEventType, handler: CustomEventHandler<{ count: number }>): CustomEventListener;

  public static addListener(element: EventTarget, type: "test", handler: CustomEventHandler<{ test: boolean }>): CustomEventListener;

  public static addListener<T>(element: EventTarget, type: CustomEventType, handler: CustomEventHandler): CustomEventListener {
    element.addEventListener(type, handler as EventListener);
    return {remove: () => element.removeEventListener(type, handler as EventListener)};
  }
}

export default CustomEventsService;