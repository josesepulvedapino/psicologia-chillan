export default function Head() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//wa.me" />
      <link rel="dns-prefetch" href="//web.whatsapp.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Psicología Chillán" />
      <meta name="application-name" content="Psicología Online Chillán" />
      <meta name="msapplication-TileColor" content="#059669" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#059669" />
      
      {/* Preload critical resources */}
      <link 
        rel="preload" 
        href="/psychologist-online-session.jpg" 
        as="image" 
        type="image/jpeg"
      />
      
      {/* Additional SEO meta tags */}
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="1 days" />
      <meta name="expires" content="never" />
      <meta name="pragma" content="no-cache" />
      <meta name="cache-control" content="public" />
      
      {/* Local business specific */}
      <meta name="geo.region" content="CL-NB" />
      <meta name="geo.placename" content="Chillán, Región de Ñuble" />
      <meta name="geo.position" content="-36.6063;-72.1039" />
      <meta name="ICBM" content="-36.6063, -72.1039" />
    </>
  )
}
