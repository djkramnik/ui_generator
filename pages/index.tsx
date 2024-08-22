import type { NextPage } from 'next'
import { ThemeToggle } from '../components/lib/theme_toggle'
import { ThreeCol } from '../components/lib/layout/threecol'
import { Testimonial } from '../components/lib/applied/testimonial'
import { NewsPreview } from '../components/lib/applied/news_preview'
import { NavBanner, Navbar, NavbarLinks } from '../components/lib/applied'
import { CnnLogo } from '../components/svg'
import { Spacer } from '../components/lib/layout/spacer'
import { Button, Heading } from '../components/lib/atomics'

const Home: NextPage = () => {
  return (
    <>
      <Navbar h="40px">
        <NavbarLinks wrapChildren>
          <CnnLogo style={{ marginRight: '12px'}} />
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
          <Button $sx={{ 
            color: '#fff',
            border: '1px solid #fff',
            borderRadius: '8px',
            padding: '6px 8px',
            fontWeight: '700',
            }}>
            Sign In
          </Button>
        </NavbarLinks>
      </Navbar>
      <NavBanner
        lineOne="HAPPENING NOW"
        lineTwo={<a href="#">Oprah Winfrey solves world hunger.  Watch it Live!</a>}
      />
      <Heading level={4} $sx={{
        textAlign: 'center',
        fontWeight: '700',
        fontSize: '24px',
        width: '80%',
        margin: 'auto',
        color: '#aaa',
        letterSpacing: '0',
        paddingTop: '20px',
        position: 'relative',
        top: '8px'
      }}>
        DEMOCRACY IN ACTION
      </Heading>
      <Heading level={1} $sx={{ 
        textAlign: 'center',
        padding: '20px 0',
        paddingTop: '0',
        fontSize: '94px',
        fontWeight: '700',
        margin: 'auto'
        }}>
        <a href="#">Bro, do what we tell you</a>
      </Heading>
      <ThemeToggle />
      <ThreeCol>
        <>
        <NewsPreview
          topHeadline="Read my lips says old man, whilst licking said lips disturbingly"
          imgSrc="/thumbs/yt_thumb1.jpg"
          headline="Unearthed recording of Black Keys Lead Singer reveals confession of lonely young maleness"
          />
          <Testimonial 
            imgSrc="/avatars/guillermo.jpg"
            name="Vedran Earthling"
            position="Chief Code Inquisitor"
            testimony="I used to work with this guy who would create ridiculous commit messages all the time.  I felt relief when he left the company."
          />
          <Testimonial
            imgSrc="/avatars/ryan.jpg"
            name="Ye L"
            position="Chief Code Guru"
            testimony="Most of the year you relax in the shade.  But when the landowner sounds the horn yes you are obligated to rouse yourself to work."
          />
          <Testimonial
            imgSrc="/avatars/kent.jpg"
            name="Seyi N"
            position="Executor"
            testimony="I eat 3000 cal exactly a day, and 1 gram of protein per pound of body mass.  I wrote a reverse dictionary lookup code in javascript in only 50 lines of code one time."
          />
        </>
        <>
        <NewsPreview
          imgSrc="/thumbs/cnn1.jpg"
          headline="Body of British tech millionaire recovered from yacht, Italian official says, as divers search for his daughter"
          />
          <Testimonial
            imgSrc="/avatars/adam.jpg"
            name="David Grrrrr"
            position="Religious Zealot"
            testimony="God has chosen me.  And he shall smite my enemies!!!"
          />
          <Testimonial
            imgSrc="/avatars/shruti.jpg"
            name="Shruti"
            position="Web wizard"
            testimony="David G is crazy and I caught him trying to fight with pigeons outside the office."
          />
          <Testimonial
            imgSrc="/avatars/ben.jpg"
            name="Adam Ragu"
            position="Manager"
            testimony="I left a malware infested ubs stick on the subway for someone to find."
          />
          <Testimonial
            imgSrc="/avatars/debbie.jpg"
            name="Debbie Dee"
            position="Designer"
            testimony={`After visiting Catalan last summer i was inspired to incorporate more 17th Century Spanish architectural style into our website.
              Psychedelic drugs are a great way to look at the world with fresh eyes, the eyes of a child.`}
          />
        </>
        <>
          <Testimonial
            imgSrc="/avatars/guts.jpg"
            name="Boss Man"
            position="CEO"
            testimony={`I like to stare at my workers as they code, scrutinizing the way they type.  None of them can beat me in a game of table tennis and it sickens me.`}
          />
          <Testimonial
            imgSrc="/avatars/historian.jpg"
            name="Russian Prodigy"
            position="Jr Dev"
            testimony={`I wrote the entire application in the least amount of time, for the least amount of money, with the least amount of bugs.  I will not say hello to you on the staircase.`}
          />
          <Testimonial
            imgSrc="/avatars/couple.jpg"
            name="Still Innocent Intern"
            position="Intern"
            testimony={`When the CTO wandered into the room drunk and asked me if I had any questions, with a crazed look in his eye, I did in fact have a lot of questions. But my instinct for survival blocked them from my mind so I just told him no.`}
          />
        </>
      </ThreeCol>
    </>
    
  )
}

export default Home