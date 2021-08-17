import CustomEventsService from "./CustomEventsService";

class ImageService {

  private images: ThumbnailData[] = [];
  private _resultInput?: HTMLInputElement;
  private _tempInput?: HTMLInputElement;
  private _filesCount: number = 0;

  public register(resultInput: HTMLInputElement, tempInput: HTMLInputElement) {
    this._resultInput = resultInput;
    this._tempInput = tempInput;
  }

  public get id(): string {
    return this._tempInput?.id ?? "";
  }

  public get input(): Optional<HTMLInputElement> {
    return this._tempInput;
  }

  public get filesCount(): number {
    return this._filesCount;
  }

  public updateInput(): void {
    if (this._resultInput?.files && this._tempInput?.files) {
      const dataTransfer = new DataTransfer();
      const allFiles = [...Array.from(this._resultInput.files), ...Array.from(this._tempInput.files)]
      allFiles.forEach((file) => dataTransfer.items.add(file));
      this._resultInput.files = dataTransfer.files;
      CustomEventsService.dispatch(
        "filesChanged",
        {count: this._resultInput.files.length},
        this._tempInput
      );
    }
  }

  public reset(): void {
    if (this._tempInput) this._tempInput.files = new FileList();
  }

  public toggleCameraUsage(useCamera: boolean): void {
    if (useCamera) {
      this._tempInput?.setAttribute("capture", "");
    } else {
      this._tempInput?.removeAttribute("capture");
    }
  }

  public addListener(type: "filesChanged", handler: CustomEventHandler<{ count: number }>): Optional<CustomEventListener>;

  public addListener(type: CustomEventType, handler: CustomEventHandler): Optional<CustomEventListener> {
    if (this._tempInput) return CustomEventsService.addListener(this._tempInput, type, handler);
  }

}

export const imageService = new ImageService();