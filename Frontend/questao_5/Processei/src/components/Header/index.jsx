import NavBar from "./NavBar";

export default function Header(props) {
  return (
    <header className="fixed top-0 z-50 w-full bg-black text-white">
      <div className="header-container mx-auto flex w-[90%] max-w-7xl items-center justify-between py-4">
        <NavBar />
      </div>
    </header>
  );
}
