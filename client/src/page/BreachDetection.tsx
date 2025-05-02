import BreachContentComponent from "../components/BreachDetection/BreachContent";
import BreachHeaderComponent from "../components/BreachDetection/BreachHeader";
import FooterComponents from "../components/Main/Footer";
import NavComponents from "../components/Main/Nav";

export default function BreachDetectionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavComponents />
      <BreachHeaderComponent />
      
      <main className="flex-grow">
        <BreachContentComponent />
      </main>

      <FooterComponents />
    </div>
  );
}
