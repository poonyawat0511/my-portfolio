import Image from "next/image";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
  /** ex: "16/9", "4/3", 1.777...  */
  aspect?: string | number;
  quality?: number;
  /** tailwind rounded classes, ex: "rounded-lg", "rounded-2xl", "rounded-tl-[3rem]" */
  rounded?: string;
  /**
   * ถ้า true: ให้คอมโพเนนต์ "fill" พื้นที่ของ parent (ต้องให้ parent เป็น relative + กำหนดสัดส่วน/ความสูงไว้)
   * ถ้า false (ค่าเริ่มต้น): คุมสัดส่วนด้วย aspect-ratio ที่ตัวเอง
   */
  fillParent?: boolean;
};

export function ResponsiveImage({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px",
  loading,
  aspect = "16/9",
  quality = 90,
  rounded = "rounded-lg",
  fillParent = false,
}: ResponsiveImageProps) {
  const aspectStyle =
    typeof aspect === "number"
      ? aspect
      : (() => {
          const [w, h] = aspect.split("/").map(Number);
          return !isNaN(w) && !isNaN(h) && h !== 0 ? w / h : 16 / 9;
        })();

  // ถ้า fillParent: wrapper จะ absolute inset-0 (ไม่ตั้ง aspectRatio)
  // ถ้าไม่: wrapper จะ relative + aspectRatio ตามปกติ
  const wrapperClass = fillParent
    ? `absolute inset-0 w-full h-full overflow-hidden ${rounded} ${className}`
    : `relative w-full overflow-hidden ${rounded} ${className}`;

  const wrapperStyle = fillParent ? undefined : { aspectRatio: String(aspectStyle) };

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        className={`object-cover ${rounded}`}
        priority={priority}
        loading={priority ? "eager" : loading ?? "lazy"}
      />
    </div>
  );
}
