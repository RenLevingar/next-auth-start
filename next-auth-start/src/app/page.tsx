import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>It All Starts with This</h1>
      <Image src={"https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1713465210/NewsLetter/IMG_9190_vgbko8.jpg"} alt="georgianna" width={1000} height={1000} />
    </main>
  );
}
