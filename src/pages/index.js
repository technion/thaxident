import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import lastthax from "../images/lastthax.png"

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <img alt="Last Thax"
          className="block mx-auto mb-8"
          src={lastthax}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          There were no thaxidents today..
        </h2>

        <p className="leading-loose">
          Just a #1 Sapper user.
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
