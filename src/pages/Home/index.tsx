import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Hodwini :: Главная</title>
        <meta name="description" content="Hodwini — это лучшее место, чтобы не скучать." />
        <meta property="og:title" content="Hodwini" />
        <meta property="og:description" content="Официальный сайт Hodwini" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="p-6">
        <h1 className="text-3xl font-bold">Добро пожаловать</h1>
        <p>SEO теперь тебя любит.</p>
      </main>
    </>
  );
}

export default HomePage;
