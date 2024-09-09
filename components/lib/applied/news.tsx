import { CnnLogo } from "../../svg"
import { Button, Heading } from "../atomics"
import { ThreeCol } from "../layout"
import { NavBanner, Navbar, NavbarLinks } from "./navbar"
import { NewsLinkList, NewsPreview } from "./news_preview"

// TODO: customizable content you idiot
export const ThreeColNews = () => {
  return (
    <ThreeCol>
    <>
      <NewsPreview
        topHeadline="Read my lips says old man, whilst licking said lips disturbingly"
        imgSrc="/thumbs/yt_thumb1.jpg"
        headline="Unearthed recording of Black Keys Lead Singer reveals confession of lonely young maleness"
      />
      <NewsLinkList 
        links={[
          'Trump threatens a crash course in foreign diplomacy for Buttigieg and Harris.',
          'Tyreek Hill looks up at the roaring fans, his eyes stung with tears.',
          'How technology helped prevent further bloodshed at the mass gun attack in Georgia.',
          'A painted world found in a Cupboard sold for $1.4M.  Could it be a long lost Rembrandt?',
          'Kanye West has his greatest success when he participates in charitable sports events.'

        ]}
      />
    </>
    <>
      <NewsPreview
        headline="Old insecure man looks disapprovingly at some random object in the distance, trying to hide his hurt feelings"
        imgSrc="/thumbs/cnn3.jpg"
      />
      <NewsLinkList 
        links={[
          'If there is but one more infraction against our code, the whole thing was a disgusting charade.',
          'Tyreek Hill looks up at the roaring fans, his eyes stung with tears.',
          'How technology helped prevent further bloodshed at the mass gun attack in Georgia.',
          'A painted world found in a Cupboard sold for $1.4M.  Could it be a long lost Rembrandt?',
          'Kanye West has his greatest success when he participates in charitable sports events.'

        ]}
      />
    </>
    <>
      <NewsPreview
        imgSrc="/thumbs/cnn1.jpg"
        headline="Body of British tech millionaire recovered from yacht, Italian official says, as divers search for his daughter"
      />
    </>
  </ThreeCol>
  )
}

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
      <ThreeColNews />
    </>
  )
}
