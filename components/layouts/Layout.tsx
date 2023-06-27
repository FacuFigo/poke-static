import { FC } from "react";
import Head from "next/head";

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokémon App"}</title>
        <meta name="author" content="Figoli Facundo" />
        <meta name="description" content={`Info sobre el Pokémon ${title}`} />
        <meta name="keywords" content={`${title}, pokémon, pokedex`} />
      </Head>

      {/*<Navbar></Navbar>*/}

      <main>{children}</main>
    </>
  );
};
