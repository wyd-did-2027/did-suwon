import Image from "next/image";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

const PREFIX: Record<string, { pc: string; mobile: string }> = {
  kr: { pc: "pk", mobile: "mk" },
  en: { pc: "pe", mobile: "me" },
};

export default function SliderItem02({ locale }: { locale: string }) {
  const { pc, mobile } = PREFIX[locale] || PREFIX.ko;

  return (
    <div className="relative w-full h-full">
      <Image
        src={`${R2_URL}/suwon/${mobile}_3.png`}
        alt="수원3"
        fill
        className="object-cover min-[1080px]:hidden block"
        priority
      />
      <Image
        src={`${R2_URL}/suwon/${pc}_3.png`}
        alt="수원3"
        fill
        className="object-cover hidden min-[1080px]:block"
        priority
      />
    </div>
  );
}
