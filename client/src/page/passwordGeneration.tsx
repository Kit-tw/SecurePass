import GeneratePassword from "../components/GeneratePassword/GeneratePassword";
import HeaderGenerate from "../components/GeneratePassword/HeaderGenerate";
import FooterComponents from "../components/Main/Footer";
import NavComponents from "../components/Main/Nav";

export default function PasswordGenerationPage() {
  return (
    <>
<div className="min-h-screen flex flex-col">
      <NavComponents />
      <HeaderGenerate />
      
      <main className="flex-grow">
        <GeneratePassword />
      </main>
      <FooterComponents />
    </div>
    </>
  );
}
