import { Card } from "components";
import { useCardsContext } from "context";

function Home() {
  const { status, cards } = useCardsContext();

  return (
    <main className="max-w-3xl m-auto min-h-screen">
      <section className="my-4 grid gap-3 grid-cols-[repeat(auto-fit,208px)] grid-flow-row">
        {status === "success" &&
          cards.length > 0 &&
          cards.map((image) => <Card key={image.id} info={image} />)}
        {status === "loading" && <h1>Loading...backdrop:</h1>}
        {status === "failed" && <h1>Failed to load images</h1>}
      </section>
    </main>
  );
}

export { Home };
