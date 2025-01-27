import { Footer } from '../../components/Footer/Footer';
import { Gallery } from '../../components/Gallery/Gallery';
import { Navbar } from '../../components/Navbar/Navbar';

export function About() {
  return (
    <>
      <Navbar />
      <h1>About Us</h1>

      <section>
        <Gallery />
      </section>
      <section>
        <Gallery />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
