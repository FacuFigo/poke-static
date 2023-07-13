import { Layout } from "@/components/layouts";
import { GetStaticProps, NextPage } from "next";
import { pokeApi } from "@/api";
import { PokemonListResponse, PokemonMetaData } from "@/interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";

interface Props {
  pokemons: PokemonMetaData[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map(({ id, name, img }) => (
          <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card isHoverable isPressable>
              <Card.Body css={{ p: 1 }}>
                <Card.Image src={img} witdh="100%" height={140} />
              </Card.Body>
              <Card.Footer>
                <Row justify="space-between">
                  <Text>{name}</Text>
                  <Text>#{id}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // noinspection TypeScriptValidateTypes
  const { data } = await pokeApi.get<PokemonListResponse>(
    "/pokemon?limit=151",
    {
      headers: { "accept-encoding": null },
    }
  );

  const pokemons: PokemonMetaData[] = data.results.map((poke, index) => ({
    ...poke,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
