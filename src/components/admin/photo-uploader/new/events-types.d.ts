type CustomEventType = "filesChanged" | "test";

type CustomEventHandler<T = any> = (event: CustomEvent<T>) => void;

type FilesChangeEventListener = _CustomEventHandler<{ count: number; }>;

interface CustomEventListener {
  remove: () => void;
}