import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Anchor, Grid, Image, List, ScrollArea, Title } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import React, { useState } from 'react'
import wingst from '../media/wingst.jpeg'
import perugia from '../media/perugia.jpeg'
import paris from '../media/paris.jpeg'
import strasbourg from '../media/strasbourg.jpeg'
import iceland from '../media/iceland.jpeg'
import lucerne from '../media/lucerne.jpeg'
import heidelberg from '../media/heidelberg.jpeg'
interface CountryProps {
  name: string
  img?: string
  key: number
}

export function TravelPage (): JSX.Element {
  const { height } = useViewportSize()
  const [img, setImg] = useState<string>(heidelberg)

  function CountryVisited ({
    name,
    img = undefined,
    key
  }: CountryProps): JSX.Element {
    return (
      <List.Item key={key}>
        {img === undefined
          ? (
              name
            )
          : (
          <Anchor onClick={() => setImg(img)}>{name}</Anchor>
            )}
      </List.Item>
    )
  }

  const countries = [
    <CountryVisited key={1} name="2014: Berlin, Germany" />,
    <CountryVisited key={1} name="2014: Tallinn, Estonia" />,
    <CountryVisited key={1} name="2014: Krakow, Poland" />,
    <CountryVisited key={1} name="2014: Madrid, Spain" />,
    <CountryVisited key={1} name="2014: Munich, Germany" />,
    <CountryVisited key={1} name="2014: Nürnberg, Germany" />,
    <CountryVisited key={1} name="2017: Montréal, Canada" />,
    <CountryVisited key={1} name="2018: Bergen, Norway" />,
    <CountryVisited key={1} name="2018: Odda, Norway" />,
    <CountryVisited key={1} name="2018: Lofoten Islands, Norway" />,
    <CountryVisited key={1} name="2018: Budapest, Hungary" />,
    <CountryVisited key={1} name="2018: Vienna, Austria" />,
    <CountryVisited key={1} name="2018: Prague, Czech Republic" />,
    <CountryVisited key={1} name="2018: Wingst, Germany" img={wingst} />,
    <CountryVisited key={1} name="2019: Tokyo, Japan" />,
    <CountryVisited key={1} name="2019: Kyoto, Japan" />,
    <CountryVisited key={1} name="2019: Hiroshima, Japan" />,
    <CountryVisited key={1} name="2019: Yakushima, Japan" />,
    <CountryVisited key={1} name="2019: Naoshima and Teshima, Japan" />,
    <CountryVisited key={1} name="2019: Vancouver, Canada" />,
    <CountryVisited key={1} name="2022: Reykjavík, Iceland" img={iceland} />,
    <CountryVisited key={1} name="2022: Strasbourg, France" img={strasbourg} />,
    <CountryVisited key={1} name="2022: Lucerne, Switzerland" img={lucerne} />,
    <CountryVisited key={1} name="2022: Paris, France" img={paris} />,
    <CountryVisited
      key={1}
      name="2022: Perugia and Assisi, Italy"
      img={perugia}
    />,
    <CountryVisited
      key={1}
      name="2022: Heidelberg, Germany"
      img={heidelberg}
    />
  ]

  const countriesDesc = countries.reverse()

  return (
    <>
      <Title size="lg" pb="md">
        Travel
      </Title>
      <Grid>
        <Grid.Col xs={12} md={4} order={2} orderMd={1}>
          <ScrollArea style={{ height: (height * 3) / 4 }}>
            <List
              spacing="xs"
              size="sm"
              withPadding
              icon={<FontAwesomeIcon icon={faGlobeAmericas} />}
            >
              {countriesDesc.map((place, idx) => {
                return place
              })}
            </List>
          </ScrollArea>
        </Grid.Col>
        <Grid.Col xs={12} md={8} order={1} orderMd={2}>
          {img !== undefined
            ? (
            <Image height={(height * 7) / 10} src={img} />
              )
            : null}
        </Grid.Col>
      </Grid>
    </>
  )
}
