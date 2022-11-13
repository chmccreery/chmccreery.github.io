import { Text, Grid, Image, Space, Anchor, MediaQuery } from "@mantine/core";
import fontainebleau from "../media/profile.jpeg"
import strasbird from "../media/strasbird.jpeg"

const paragraphSpacing = "md"

export function HomePage() {
  return (
    <Grid gutter="xl">
      <Grid.Col sm={12} lg={4} >
        <Grid>
          <Grid.Col sm={6} lg={12}>
            <Image src={fontainebleau}/>
          </Grid.Col>
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Grid.Col sm={6} lg={12}>
              <Image src={strasbird}/>
            </Grid.Col>
          </MediaQuery>
        </Grid>
      </Grid.Col>
      <Grid.Col sm={12} lg={8}>
        <Text>
          Hi, and welcome to my website! My name is Clara and I am a senior software engineer and line manager at&nbsp;r2c,
          where I work on&nbsp;<Anchor href="https://semgrep.dev/">Semgrep</Anchor>.
        </Text>
        <Space h={paragraphSpacing}/>
        <Text>
          My path into tech was somewhat unconventional; I majored in chemical engineering, and my first job after graduation 
          was at MIT Lincoln Laboratory&nbsp;(MITLL) researching ways to prevent and mitigate chemical and biological 
          attacks.
        </Text>
        <Space h={paragraphSpacing}/>
        <Text>
          I loved many parts of this job (my team, the mission, the travel, real weekends, my team), 
          but I did not have the patience for lab work. I had done just enough computer science to appreciate
          how much more efficient my lab work could be if I programmed a computer to do the repetitive tasks 
          in the lab for me.
          So, I decided to go back to school and learn more computer science. I took several online classes, and 
          then applied to graduate schools. Eventually, I decided to go back to Stanford, where I
          had friends from undergrad and the prospect of a TA-ship to pay for my master's&nbsp;degree.
        </Text>
        <Space h={paragraphSpacing}/>
        <Text>
          In graduate school, I initially concentrated in machine learning. It was the next big thing, 
          everyone was doing it, and it seemed like the branch of computer science that could
          most likely to be applied to chemistry and biology - which were still near and dear to my heart. But, I 
          found that actually I much preferred the systems classes, including my work as a TA for CS 110, a class 
          about file systems, multi-processing, multi-threading, and more. So, I pivoted once again, and started 
          looking for jobs in&nbsp;software.
        </Text>
        <Space h={paragraphSpacing}/>
        <Text>
          I interviewed with r2c - one of the few companies in silicon valley where people knew MIT Lincoln Laboratory - 
          and the rest is history. I finally have a job where I don't just love the idea of the job - I actually
          enjoy the day-to-day work. Of course, everyone has good days and bad days, but I haven't been bored yet, and I am 
          pretty sure this is just the tip of the&nbsp;iceberg.
        </Text>
        <Space h={paragraphSpacing}/>
        <Text>
          Outside of work, I enjoy playing the violin and singing with my friends in&nbsp;
          <Anchor href="https://sites.google.com/view/backyardtheatersf/about?authuser=0">Backyard Theater</Anchor>, 
          running, biking, the oxford comma, and&nbsp;triathlons.
        </Text>
      </Grid.Col>
    </Grid>
  )
}