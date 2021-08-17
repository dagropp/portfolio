interface ResizedImagesList {
  [name: string]: {
    [size: number]: ResizedImageData
  }
}

interface ResizedImageData {
  src: string;
  name: string;
  type: string;
}

interface ResizeImageOptions {
  sizes: number[];
  type?: "image/jpeg" | "image/png" | "image/gif";
  quality?: number;
}

class ImageInputMethods {
  private images: ThumbnailData[] = [];
  private readonly _tempInput: HTMLInputElement;
  private readonly _resultInput: HTMLInputElement;
  private _filesCount: number = 0;

  constructor(resultInput: HTMLInputElement, tempInput: HTMLInputElement) {
    this._resultInput = resultInput;
    this._tempInput = tempInput;
  }

  register(): ThumbnailData[] {
    this.images = [...this.images, ...Array.from(this._tempInput.files ?? []).map((file) => ({file}))];
    return this.images;
  }

  didReadingComplete(): boolean {
    return this.images.every((item) => item.src);
  }

  addListener(type: "imagesReadingComplete", handler: () => void) {
    const didComplete = () => {
      if (this.images.every((item) => item.src)) handler();
    }

    this._tempInput.addEventListener(type, didComplete);
    return {remove: () => this._tempInput.removeEventListener(type, didComplete)};
  }

  async readImage(data: ThumbnailData, index: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(data.file);
      fileReader.addEventListener("load", (event: ProgressEvent<FileReader>) => {
        if (event.target?.result) {
          this.images[index].src = event.target.result as string;
          this._tempInput.dispatchEvent(new CustomEvent("imageReadingComplete", {detail: {index}}));
          return this.images[index].src;
        } else {
          return reject("FileReader failed:\n" + event.target?.error);
        }
      })
      fileReader.addEventListener("error", (event: ProgressEvent<FileReader>) => {
        return reject("FileReader failed:\n" + event.target?.error);
      })
    })
  }

  /**
   * Currently takes 90-200ms per image;
   */
  async resizeImages(data: ThumbnailData[], options: ResizeImageOptions): Promise<ResizedImagesList> {

    return new Promise((resolve, reject) => {

      const {sizes} = options;
      const temp: ResizedImagesList = {};

      if (data.length === 0) return reject("ThumbnailData[] is empty.");
      if (data.some((item) => !item.src)) return reject("Some images were not processed.")

      data.forEach((item, index) => {
        const img = document.createElement("img");
        img.src = item.src!;

        const {name, type: fType} = item.file;
        const type = options.type || fType;
        temp[name] = {};
        const {naturalWidth: width, naturalHeight: height} = img;
        sizes.forEach((size) => {
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          let resizeHeight, resizeWidth;
          if (width > height) {
            resizeWidth = size;
            resizeHeight = resizeWidth / width * height
          } else {
            resizeHeight = size;
            resizeWidth = resizeHeight / height * width;
          }
          canvas.width = resizeWidth;
          canvas.height = resizeHeight;
          context?.drawImage(img, 0, 0, width, height, 0, 0, resizeWidth, resizeHeight);
          const src = canvas.toDataURL(type, 0.75);
          temp[name][size] = {src, name, type};
        })
        if (index === data.length - 1) return resolve(temp);
      })

    });
  }
}

export default ImageInputMethods;