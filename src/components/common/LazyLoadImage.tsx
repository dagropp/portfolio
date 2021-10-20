import React, {
  DetailedHTMLProps, ImgHTMLAttributes, ReactEventHandler, useEffect, useRef, useState
} from "react";

interface ContainerProps {
  src: string;
  placeholder: string;
  className?: string;
  alt?: string;
  lazy?: boolean;
  imgProps?: Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "src" | "alt" | "loading">
}

const LazyLoadImage: React.FC<ContainerProps> = (props) => {

  const {src, placeholder, className = "", alt = "", lazy, imgProps = {}} = props;
  const {onLoad, className: imgClass = "", ...rest} = imgProps;
  const [intersecting, setIntersecting] = useState(!lazy);
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const callback: IntersectionObserverCallback = (elements, observer) => {
      elements.forEach((element) => {
        if (element.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(element.target);
        }
      });
    }

    if (ref.current) {
      const observer = new IntersectionObserver(callback);
      observer.observe(ref.current);

      return () => observer.disconnect();
    }

  }, [ref.current])

  const handleLoad: ReactEventHandler<HTMLImageElement> = (event) => {
    setLoading(false);
    onLoad?.(event);
  }

  return (
    <div
      className={`lazy-image-wrapper ${className}`}
      ref={ref}
    >
      {intersecting && <img
          src={src}
          alt={alt}
          className={`main-image ${loading ? "hide" : ""} ${imgClass}`}
          onLoad={handleLoad}
          {...rest}
      />}
      <img
        src={placeholder}
        alt={alt + " placeholder"}
        className={`placeholder-image ${loading ? "" : "hide"}`}
      />
    </div>
  )
}

export default LazyLoadImage;