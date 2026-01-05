import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import DancesGrid from "../components/dances/DancesGrid";
import { dances } from "../data/dances";

export default function Dances() {
  return (
    <>
      <main style={{ paddingTop: "6rem" }}>
        <DancesGrid
          title="2025–2026 Performance Dances"
          dances={dances}
        />
      </main>

      <Footer />
    </>
  );
}
