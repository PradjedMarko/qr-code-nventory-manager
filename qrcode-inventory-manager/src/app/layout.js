
import ClientProvider from "./components/ClientProvider";
import Navbar from "./components/Navbar"


export const metadata = {
  title: "QR Code Inventory Manager",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <ClientProvider>
        <Navbar/>
        {children}
       </ClientProvider>
      </body>
    </html>
  );
}
