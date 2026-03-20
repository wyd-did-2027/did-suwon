import Image from "next/image";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

const PREFIX: Record<string, string> = {
  kr: "pk",
  en: "pe",
};

export default function SliderItem00({ locale }: { locale: string }) {
  const prefix = PREFIX[locale] || PREFIX.ko;

  return (
    <div className="relative w-full h-full">
      <Image
        src={`${R2_URL}/suwon/${prefix}_1.png`}
        alt="수원1"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
