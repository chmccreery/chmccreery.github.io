import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Anchor, Grid, Image, List, ScrollArea, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useState } from "react";
import wingst from "../media/wingst.jpeg";
import perugia from "../media/perugia.jpeg";
import paris from "../media/paris.jpeg";
import strasbourg from "../media/strasbourg.jpeg";
import iceland from "../media/iceland.jpeg";
import lucerne from "../media/lucerne.jpeg";
import heidelberg from "../media/heidelberg.jpeg";

interface CountryProps {
  name: string;
  img?: string;
}

export function TravelPage() {
  const { height } = useViewportSize();
  const [img, setImg] = useState<string>(heidelberg);
  const [imgName, setImgName] = useState<string>("Heidelberg Castle");

  function CountryVisited({name, img}: CountryProps) {  
    return (
      <List.Item>
        {img ? 
        <Anchor onClick={() => 
          {
            setImg(img);
            setImgName(name);
          }
        }
        >
          {name}
        </Anchor> : 
        name }
      </List.Item>
    )
  }

  const countries = [
    <CountryVisited name="2014: Berlin, Germany" />,
    <CountryVisited name="2014: Tallinn, Estonia" />,
    <CountryVisited name="2014: Krakow, Poland" />,
    <CountryVisited name="2014: Madrid, Spain" />,
    <CountryVisited name="2014: Munich, Germany" />,
    <CountryVisited name="2014: Nürnberg, Germany" />,
    <CountryVisited name="2017: Montréal, Canada" />,
    <CountryVisited name="2018: Bergen, Norway" />,
    <CountryVisited name="2018: Odda, Norway" />,
    <CountryVisited name="2018: Lofoten Islands, Norway" />,
    <CountryVisited name="2018: Budapest, Hungary" />,
    <CountryVisited name="2018: Vienna, Austria" />,
    <CountryVisited name="2018: Prague, Czech Republic" />,
    <CountryVisited name="2018: Wingst, Germany" img={wingst}/>,
    <CountryVisited name="2019: Tokyo, Japan" />,
    <CountryVisited name="2019: Kyoto, Japan" />,
    <CountryVisited name="2019: Hiroshima, Japan" />,
    <CountryVisited name="2019: Yakushima, Japan" />,
    <CountryVisited name="2019: Naoshima and Teshima, Japan" />,
    <CountryVisited name="2019: Vancouver, Canada" />,
    <CountryVisited name="2022: Reykjavík, Iceland" img={iceland}/>,
    <CountryVisited name="2022: Strasbourg, France" img={strasbourg}/>,
    <CountryVisited name="2022: Lucerne, Switzerland" img={lucerne}/>,
    <CountryVisited name="2022: Paris, France" img={paris}/>,
    <CountryVisited name="2022: Perugia and Assisi, Italy" img={perugia}/>,
    <CountryVisited name="2022: Heidelberg, Germany" img={heidelberg}/>
  ];

  const countries_desc = countries.reverse();

  return (
    <>
      <Title size="lg" pb="md">Travel</Title>
      <Grid>
        <Grid.Col xs={12} md={4} order={2} orderMd={1}>
          <ScrollArea style={{ height: height*3/4 }}>
            <List
              spacing="xs"
              size="sm"
              withPadding
              icon={
                  <FontAwesomeIcon icon={faGlobeAmericas} />
              }
            >
              {countries_desc.map((place, idx) => {
                return place
              })}
            </List>
          </ScrollArea>
        </Grid.Col>
        <Grid.Col xs={12} md={8} order={1} orderMd={2}>
          {img && 
            <Image 
              height={height*7/10}
              src={img}
              alt={imgName}
            />
          }
        </Grid.Col>
      </Grid>
    </>
  )
}