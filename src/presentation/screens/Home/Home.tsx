import { Container } from "../../components/shared/Container";
import { QuoteRegister } from "../../sections/home/QuoteRegister/QuoteRegister";
import { StartSection } from "../../sections/home/StartSection";
import { Services } from "../../sections/home/services/Services";

export const Home = () => {
  return (
    <>
      <Container>
        <StartSection />
      </Container>
      <Services />
      <Container>
        <QuoteRegister />
      </Container>
    </>
  );
};
