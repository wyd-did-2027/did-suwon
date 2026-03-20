import Image from "next/image";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

const PREFIX: Record<string, { pc: string; mobile: string }> = {
  kr: { pc: "pk", mobile: "mk" },
  en: { pc: "pe", mobile: "me" },
};

export default function SliderItem03({ locale }: { locale: string }) {
  const { pc, mobile } = PREFIX[locale] || PREFIX.ko;

  return (
    <div className="relative w-full h-full bg-white">
      <Image
        src={`${R2_URL}/suwon/${mobile}_4.png`}
        alt="수원3"
        fill
        className="object-contain min-[1080px]:hidden block aspect-square"
        priority
      />
      <Image
        src={`${R2_URL}/suwon/${pc}_4.png`}
        alt="수원3"
        fill
        className="object-cover hidden min-[1080px]:block aspect-video"
        priority
      />
    </div>
  );
}
