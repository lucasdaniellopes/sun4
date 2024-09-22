import Description from "../Hero/description";
import Logo from "../Logo";
import Social from "./Social";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto flex w-[90%] max-w-7xl border-b border-solid border-white py-10">
        <div className="w-1/2">
          <Logo />
          <Description
            ClassName="mb-2 mt-2"
            text="Acompanhe seu caso, sem advogado"
          />
          <Social />
        </div>
        <div className="w-1/2">
          <div className="bg-black text-white">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex flex-col">
                <h4 className="mb-4 font-semibold">About</h4>
                <ul className="space-y-2">
                  <li className="cursor-pointer hover:underline">Company</li>
                  <li className="cursor-pointer hover:underline">Team</li>
                  <li className="cursor-pointer hover:underline">Career</li>
                  <li className="cursor-pointer hover:underline">Blog</li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h4 className="mb-4 font-semibold">Support</h4>
                <ul className="space-y-2">
                  <li className="cursor-pointer hover:underline">Company</li>
                  <li className="cursor-pointer hover:underline">Team</li>
                  <li className="cursor-pointer hover:underline">Career</li>
                  <li className="cursor-pointer hover:underline">Blog</li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h4 className="mb-4 font-semibold">Support</h4>
                <ul className="space-y-2">
                  <li className="cursor-pointer hover:underline">Company</li>
                  <li className="cursor-pointer hover:underline">Team</li>
                  <li className="cursor-pointer hover:underline">Career</li>
                  <li className="cursor-pointer hover:underline">Blog</li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h4 className="mb-4 font-semibold">Support</h4>
                <ul className="space-y-2">
                  <li className="cursor-pointer hover:underline">Company</li>
                  <li className="cursor-pointer hover:underline">Team</li>
                  <li className="cursor-pointer hover:underline">Career</li>
                  <li className="cursor-pointer hover:underline">Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="block py-2 text-center text-xs text-white">
        © 2024 Processei. Todos os direitos reservados.
      </p>
    </footer>
  );
}
