import React from "react"
import { CnnLogo } from "../../svg"
import { Button, Copy, Heading } from "../atomics"
import { Box, ThreeCol, TwoCol } from "../layout"
import { Container } from "../layout/container"
import { Spacer } from "../layout/spacer"
import { NavBanner, Navbar, NavbarLinks } from "./navbar"
import { HeadlineThreeColSection, NewsLinkList, NewsPreview, NewsPreviewH, TabbedThreeColNews, ThreeColNews } from "./news_preview"
import { CssProps } from "../../theme"

export const ThreeColCnn = () => {
  return (
    <>
      <Navbar h="40px">
        <NavbarLinks wrapChildren>
          <CnnLogo style={{ marginRight: '12px' }} />
          {'US'}
          {'World'}
          {'Politics'}
          {'Business'}
          {'Health'}
          {'Celebritities'}
          {'Style baby'}
          {'Moar'}
        </NavbarLinks>
        <NavbarLinks wrapChildren>
          {'Watch'}
          {'Listen'}
          {'Live TV'}
          <Button
            $sx={{
              color: '#fff',
              border: '1px solid #fff',
              borderRadius: '8px',
              padding: '6px 8px',
              fontWeight: '700',
            }}
          >
            Sign In
          </Button>
        </NavbarLinks>
      </Navbar>
      <NavBanner
        lineOne="HAPPENING NOW"
        lineTwo={
          <a href="#">Oprah Winfrey solves world hunger. Watch it Live!</a>
        }
      />
      <Heading
        level={4}
        $sx={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: '24px',
          width: '80%',
          margin: 'auto',
          color: '#aaa',
          letterSpacing: '0',
          paddingTop: '20px',
          position: 'relative',
          top: '8px',
        }}
      >
        DEMOCRACY IN ACTION
      </Heading>
      <Heading
        level={1}
        $sx={{
          textAlign: 'center',
          padding: '20px 0',
          paddingTop: '0',
          fontSize: '94px',
          fontWeight: '700',
          margin: 'auto',
        }}
      >
        <a href="#">Bro, do what we tell you</a>
      </Heading>
      <Container w="96%">
        <ThreeColNews />
        <Spacer />
        <TabbedThreeColNews
          tabs={[
            'Mortons Steakhouse',
            'Atlantic City Casinos',
            'Carmela'
          ]}
        />
        <Spacer />
        <HeadlineThreeColSection
          headline="Food, Sex, Paradise"
          headlineSx={{ fontSize: '30px' }}
          >
            <NewsPreview 
              headline="New video depicts Trump smoking crack with prostitutes"
              imgSrc="/thumbs/cnn64.jpg"
            />
            <NewsPreview 
              headline="Three fiddy buys you a hello"
              imgSrc="/thumbs/cnn60.jpg"
            />
            <NewsPreview 
              headline="Christmas is the C word says Reddit"
              imgSrc="/thumbs/cnn62.jpg"
            />
            <NewsPreview 
              headline="Parent of the year takes kids to see Raffi"
              imgSrc="/thumbs/cnn61.jpg"
            />
            <NewsPreview 
              headline="So called Karen flips out over the term December holidays"
              imgSrc="/thumbs/cnn63.jpg"
            />
            <NewsPreview 
              headline="Suicidal ideation rising in depressed jobless ugly old people"
              imgSrc="/thumbs/cnn66.jpg"
            />
        </HeadlineThreeColSection>
      </Container>
    </>
  )
}
