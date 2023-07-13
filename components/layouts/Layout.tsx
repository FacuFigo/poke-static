import { FC } from "react";
import Head from "next/head";
import { Navbar } from "@/components/ui";

interface Props {
  children: any;
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
      <Navbar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
