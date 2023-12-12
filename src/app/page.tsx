import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white">
      <Image
        src="/under_construction.svg"
        alt="Coming Soon"
        width={500}
        height={500}
        priority
      />
      <h1 className="text-3xl font-bold text-black py-10">Staco Web Page 🚀</h1>
      <h2 className="text-black">Coming soon...</h2>
    </main>
  );
}
