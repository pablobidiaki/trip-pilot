import Header from "@/components/header"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden max-w-7xl mx-auto">
      <img
        src="/background.png"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        alt=""
      />
      <Header />
      <p>viagai</p>
    </div>
  );
}
