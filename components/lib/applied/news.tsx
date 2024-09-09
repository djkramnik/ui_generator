import { CnnLogo } from "../../svg"
import { Button, Heading } from "../atomics"
import { ThreeCol } from "../layout"
import { NavBanner, Navbar, NavbarLinks } from "./navbar"
import { NewsLinkList, NewsPreview, NewsPreviewH } from "./news_preview"

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
          'Tyreek Hill looked up at the roaring fans, blinking away the sweat trickling into his eyes.',
        ]}
      />
      <NewsPreview imgSrc="/thumbs/cnn12.jpg"
        headline="Fuck Santy Claus, say demoralized Ukrainian troops"
      />
      <NewsLinkList
        links={[
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
        withDot
        links={[
          'If there is but one more infraction against our code... the whole thing was a disgusting charade.',
          'It looks fleek.  In time, everything will be revealed to you, don\'t worry.',
          'If that\'s the way it is, that\'s the way it is.  Sure I\'ll take care of you.',
          'I will be by every Sunday, was the last recorded statement witnesses allege.',
          'Can kids still do homework without smart phones experts ask.'

        ]}
      />
      <NewsPreviewH imgSrc="/thumbs/cnn14.jpg"
        headline="Heyyy, the capital of Canada.  This kid smart or what."
      />
      <NewsPreviewH imgSrc="/thumbs/cnn15.jpg"
        headline="Shyness is a curse, says Bobby Baccala."
      />
    </>
    <>
      <NewsPreview
        imgSrc="/thumbs/cnn1.jpg"
        headline="Body of British tech millionaire recovered from yacht, Italian official says, as divers search for his daughter"
      />
      <NewsLinkList 
        links={[
          'Put the pasta back in the pot with a little gravy, and a little butter.',
          'Fourty five seconds, staring up really nice, is the period of time when the macaroni absorbs the gravy.',
          'Canadian Prime Minster Justin Trudeau confides to Kamala Harris that Canada needs "a piece" in order to protect itself.',
          'How .38 calibre firearms helped prevent a mass killing in Las Vegas.',
          'The macaroni will be ready in thirty seconds is riling up some appetites.'
        ]}
      />
      <ThreeCol>
        <NewsPreview
          headlineSx={{ fontSize: '16px', fontWeight: 'normal' }}
          imgSrc="/thumbs/cnn5.jpg"
          headline="She was married to Tony Soprano for twenty fucking years.  This is all she has to show for it."
        />
        <NewsPreview
          headlineSx={{ fontSize: '16px', fontWeight: 'normal' }}
          imgSrc="/thumbs/cnn6.jpg"
          headline="Stop and smell the gorilla shit, it is good to get away, advised Trump's legal team."
        />
        <NewsPreview
          headlineSx={{ fontSize: '16px', fontWeight: 'normal' }}
          imgSrc="/thumbs/cnn7.jpg"
          headline="Flattery will get you nowhere, Mr. Bond."
        />
      </ThreeCol>
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
