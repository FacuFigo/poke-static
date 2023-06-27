import { Button } from "@nextui-org/react";
import { FC } from "react";
import { Layout } from "@/components/layouts";

const HomePage: FC = () => {
  return (
    <Layout title="Listado de Pokemons">
      <Button color="gradient">Click me</Button>
    </Layout>
  );
};

export default HomePage;
