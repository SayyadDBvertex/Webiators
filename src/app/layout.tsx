
import './globals.css';

import { ReactNode } from 'react';


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Main Content */}
        
        <main className="flex-1">
          {children}
        </main>
        

      </body>
    </html>
  );
}
