import GeneratePassword from "../components/GeneratePassword/GeneratePassword";
import HeaderGenerate from "../components/GeneratePassword/HeaderGenerate";
import FooterComponents from "../components/Main/Footer";
import NavComponents from "../components/Main/Nav";

export default function PasswordGenerationPage() {
  return (
    <>
      <NavComponents />
      <HeaderGenerate/>
      <GeneratePassword/>
      <FooterComponents/>
    </>
  );
}
