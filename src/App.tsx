import { Footer, Navbar } from "./layout";
import { TempContainer } from "./template";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <TempContainer
          title="iPhone 14"
          subtitle="Big and Bigger"
          link={["Learn more", "Buy"]}
          src="/iPhone14.png"
        />

        <TempContainer
          dark
          title="Watch"
          subtitle="A healthy leap ahead"
          link={["Learn more", "Buy"]}
          src="/appleWatch.png"
        />

        <div className=" m-2 grid gap-2 md:grid-cols-2">
          <TempContainer
            dark
            title="iPhone 14 Pro"
            subtitle="Pro - Beyond"
            link={["Learn more", "Buy"]}
            src="/iPhonePro.png"
          />

          <TempContainer
            title="iPad"
            subtitle="Lovable - Drawable - Magical."
            link={["Learn more", "Buy"]}
            src="/iPad.png"
          />

          <TempContainer
            title="Watch"
            subtitle="Advencure Awaits."
            link={["Learn more", "Buy"]}
            src="/watchUltra.png"
          />

          <TempContainer
            dark
            title="AirPods Pro"
            subtitle="Rebuilt from the sound up."
            link={["Learn more", "Buy"]}
            src="/airPodsPro.png"
          />

          <TempContainer
            dark
            title="MacBook Air"
            subtitle="Supercharged."
            link={["Learn more", "Buy"]}
            src="/macBookAir.png"
          />

          <TempContainer
            title="Card"
            subtitle="Get up to 3% Daily Cash back with every purchase."
            link={["Learn more", "Buy"]}
            src="/appleCard.png"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
