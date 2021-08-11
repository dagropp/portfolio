interface PhotoUploadOptions {
  enableStyle?: boolean;
  theme?: "light" | "dark";
  resizeTo?: number | number[];
}

interface PhotoUploadThumbnailsOptions {
  thumbnailClassName?: string;
  thumbnailImageProps?: Omit<HTMLProps<HTMLImageElement>, "src" | "alt">;
  canDelete?: boolean;
  canRotate?: boolean;
}

interface DynamicSetComponentProps {
  inputRef: React.RefObject<HTMLInputElement>;
  images: ThumbnailData[];
  setImages: Dispatch<SetStateAction<ThumbnailData[]>>;
  imageService: ImageService;
}

type PhotoUploadComponentType = "PhotoUploadInput" | "PhotoUploadDropzone" | "PhotoUploadThumbnails";

interface ThumbnailData {
  file: File;
  src?: string;
  exists?: boolean;
}