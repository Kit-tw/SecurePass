import BreachHeaderComponent from "../components/BreachDetection/BreachHeader";
import FooterComponents from "../components/Main/Footer";
import NavComponents from "../components/Main/Nav";

export default function BreachDetectionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavComponents />
      <main className="flex-grow">
      <BreachHeaderComponent />      
      </main>

      <FooterComponents />
    </div>
  );
}
