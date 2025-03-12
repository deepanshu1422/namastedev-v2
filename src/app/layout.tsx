import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <head>
        
       
      </head>
    
              <body
                className={` bg-bg`}
              >
                {/* Google Tag Manager (noscript) */}
                
                {/* End Google Tag Manager (noscript) */}
               
                {children}
                <Toaster />
              </body>
            
     
    </html>
  );
}
