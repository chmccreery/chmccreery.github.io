import { Container, Stack, Text } from '@mantine/core';
import { Subtitle } from '../../components/SubTitle';
import React from 'react';
import { BlogTitle } from '../../components/BlogTitle';

export function ModifiedPomodoroMethod(): JSX.Element {
  return (
    <Container>
      <BlogTitle>My Modified Pomodoro Method</BlogTitle>
      <Stack>
        <Text>
          For those who don’t know, the Pomodoro Method is a popular technique
          for enhancing productivity and improving time management skills. You
          divide your work into 25-minute focused blocks of time called
          “pomodoros” with 5-minute breaks in between, and you only give
          yourself credit for a “pomodoro” if you achieve 25 minutes without
          interruptions working on the task you planned to work on. It is
          supposed to help you get a better sense of how long (i.e. how many
          “pomodoros”) various tasks take and thus help with planning. It is
          also said to improve your focus if your mind wanders a lot or if you
          are constantly being interrupted, and of course there are lots of
          health benefits to forcing yourself to stand up every 25 minutes to
          stretch, look at something other than a screen, and realize that
          actually you are thirsty and need to use the bathroom and until now
          you had no idea.
        </Text>
        <Text>
          On the recommendation of a coworker who uses it religiously, I have
          tried the Pomodoro Method several times, but my first few forays into
          the land of the pomodoros lasted only a few days. I would forget to
          set the timer or fail to take a break, couldn’t figure out what to do
          with meetings longer than 25 minutes, and struggled to find time for
          tasks that took significantly less than 25 minutes but still needed to
          get done (of which there are many, and they add up!)
        </Text>
        <Text>
          However, I recently decided to transition into engineering management
          and was inspired to try it one more time. My manager had asked me to
          write down everything I was currently spending my time on, so that we
          could take some of these responsibilities off my plate to make room
          for the new ones I would be adding. Looking for a way to quantify how
          I was spending my time, I turned once more to the Pomodoro Method. But
          this time, instead of using the Pomodoro Method exactly as I had read
          about it, I modified it to meet my current needs, and I feel like
          every day I am discovering a new benefit.
        </Text>
        <Subtitle>Documenting My Time</Subtitle>
        <Text>
          The most obvious benefit of my current Pomodoro Method usage is that I
          now have a written log of how I spent each day. As a result, I can
          actually say with some confidence how many hours I spent writing code,
          meeting with my team, doing code reviews, scoping out future projects,
          hiring our next class of interns, etc. As an added bonus, I now have a
          list of my efforts and achievements (and failures) over the last
          several months that includes the type of team-building work that
          doesn’t make it into Linear, which we use to track technical work on
          my team.
        </Text>
        <Text>
          This is great for both me and my manager to understand how I am
          spending my time. It also gives me the previously-described benefit of
          seeing, quite visually, how long certain tasks take. For example, I
          was on-call and handling a P0 outage that consumed a whopping 18
          “pomodoros” of time. And I worked straight through it, forgetting to
          take breaks. This is invaluable data.
        </Text>
        <Subtitle>Incentivizing Breaks</Subtitle>
        <Text>
          I don’t know about you, but I have a completely irrational love of
          checked boxes. I think I find checking boxes more addictive than
          caffeine or sugar, and on a par with petting a really soft dog’s head.
        </Text>
        <Text>
          But, I am (perhaps this is related) terrible at taking breaks. Even
          though I know all the health benefits, and have lots of experience
          with the “Aha!” moment coming right when I finally take a break and go
          for a walk, it is extremely difficult for me to put my work down when
          I am in the middle of something. “Time’s up” my alarm says. “Just 2
          more minutes” says the voice in my head, like I’m 10 years old again
          and my mom is telling me to turn off the TV and come to dinner.
        </Text>
        <Text>
          Clearly, I need an extra incentive to take my breaks, something as
          powerful as my inertia to keep working, so I added a check box to my
          Pomodoro spreadsheet for whether or not I took a break after
          completing my 25 minutes of work. I am slightly embarrassed by how
          well this has worked for me.
        </Text>
        <Subtitle>Remembering New Goals</Subtitle>
        <Text>
          Somewhere along the way, I decided that in addition to documenting how
          I was spending my time, I wanted to document why I was spending my
          time that way. I have heard that one of the most difficult things
          about transitioning into management is the mindset shift from thinking
          about your own productivity to focusing on your team’s productivity.
          For example, my old goals might have looked like “Unblock Customers”
          or “Technical Learning” when I was an engineer, but my new goals
          included “Preserve IC Focus Time”, “Grow Team”, “Spread Knowledge” and
          “Cross-team Collaboration”. Putting these new goals into my Pomodoro
          spreadsheet and forcing myself to evaluate each 25 minute block of
          time in terms of these new goals meant I was reminding myself multiple
          times a day that the nature of my work had changed. As a result, there
          have been many moments when I was sitting down to start a block of
          work, got to the “goals” column of my spreadsheet, and actually
          modified my choice of what I was about to do to better meet my goals.
          For example, instead of fixing a bug to help a customer, I recognized
          the need to transfer that knowledge to another IC and instead asked my
          mentee if she wanted to pair program with me.
        </Text>
        <Subtitle>Counting It All</Subtitle>
        <Text>
          As you may have guessed by now, I am a little bit compulsive (see
          previous discussion of checkboxes) and the idea of tracking only the
          work in which I accomplished a perfect 25-minute focus block never sat
          well with me. If a family member came into my office at minute 22 and
          started talking to me, I didn’t want to feel resentful over my lost
          “pomodoro”, so I started to track it all. Enter… another checkbox!
        </Text>
        <Text>
          Every 25 minute chunk of time that I spend working now gets recorded,
          and if I manage to accomplish it as a fully focused, pre-planned,
          25-minute block with no interruptions, then I check the “Focused”
          checkbox and otherwise I don’t. This is helping me understand what
          portion of my time is fully focused and I am still tracking my
          progress toward achieving more and more real “pomodoros” per day
          without feeling like I’ve completely wasted a block of time if I get
          sucked into some P0 issue, interrupted by a loved one, or end up
          responding to messages from a teammate on Slack for 10 minutes.
        </Text>
        <Subtitle>Conclusion</Subtitle>
        <Text>
          I am still iterating and adjusting the Pomodoro Method to fit my
          needs, but I am finding that the longer I do it, and the more I adjust
          it, the more benefits I am discovering from it. In case you are
          interested in trying out my spreadsheet, I am leaving a screenshot of
          it below. But, I also encourage you to use it merely as a jumping off
          point and to tailor it as much as you need to make it work for you.
        </Text>
      </Stack>
    </Container>
  );
}
