import Image from "next/image";
import HeroImage from "@/app/assets/hero.png"; // <-- your image here

export default function Hero() {
  return (
    <section className="relative w-full h-[300px] md:h-[420px]">
      {/* Background image */}
      <Image
        src={HeroImage}
        alt="Disc golf background"
        fill
        priority
        className="object-cover rounded-lg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#6B4D29]/50 rounded-xl" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <h1 className="max-w-3xl text-2xl font-bold leading-tight text-[#FCF6DB] md:text-5xl">
          Honest disc golf reviews with a grounded, outdoors feel.
        </h1>
      </div>
    </section>
  );
}