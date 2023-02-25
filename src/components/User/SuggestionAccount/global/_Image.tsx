import Image, { ImageProps } from 'next/image';

export function $Image({ src, alt }: ImageProps) {
  return (
    <Image
      className="rounded-full"
      src={src}
      alt={alt}
      width={32}
      height={32}
    />
  );
}
