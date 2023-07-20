import { Inter } from "next/font/google";
import Card from "@/components/Card";
import { ACTIVITIES } from "../../data/activities";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex flex-col ${inter.className}`}>
      <h1 className="text-black font-semibold my-4 ml-4">
        Découvrez des activités
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {ACTIVITIES.map((obj) => (
          <Card
            path={`/${obj.path}`}
            image={obj.image}
            key={obj.id}
            category={obj.type}
            description={obj.description}
          />
        ))}
      </div>
    </main>
  );
}
