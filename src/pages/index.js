import { Header } from "@/components/Header/Header";
import { MovieList } from "@/components/MovieList";

export default function Home() {
  return (
    <main className="max-w-[1024px] px-6 flex flex-col  justify-center mx-auto gap-5 px-2">
      <Header />
      <MovieList />
    </main>
  );
}
