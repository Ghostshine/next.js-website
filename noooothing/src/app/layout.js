import "./globals.css";
import Menu from "./components/menu";
import LeftMenu from "./components/left-menu";

export const metadata = {
  title: "Noooothing",
  description: "Nic – najcichsze słowo świata",
  icons: {
    icon: "/icon.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
    <header id="headerId">
        <menu>
           <Menu />
        </menu>
    </header>

    <main id="bg" className="blue">
        <section className="left">
            <LeftMenu />
        </section>

        <section className="right">
            {children}
        </section>
    </main>

    <footer id="footerId"> Daria Borowska | 122832 | 2k25 </footer>
  </body>
    </html>
  );
}
