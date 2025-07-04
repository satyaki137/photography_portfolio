import './globals.css';
import Navbar from './components/navbar';

import '@fortawesome/fontawesome-free/css/all.min.css';


export const metadata = {
  title: 'Tokens Of Memory',
  description: 'Dipta Pal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
