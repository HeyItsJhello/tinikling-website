import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import Reveal from "../components/common/reveal";

export default function PastPerformances() {
  return (
    <>

      <main style={{ paddingTop: "6rem" }}>
        <section>
          <Reveal>
            <h2>Past Performances</h2>
            <p>
              Explore our previous years’ productions, cultural showcases,
              and major events.
            </p>
          </Reveal>

          <Reveal>
            <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
              <li>2024 – Make A Change</li>
              <li>2023 – Cultural Unity Showcase</li>
              <li>2022 – Filipino Heritage Night</li>
            </ul>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
