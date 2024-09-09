import { ResponsiveMixin } from "../../theme"
import { Card, Flex, ThreeCol } from "../layout"
import { TwoCol } from "../layout/twocol"
import { NewsPreview } from "./news_preview"

export const Testimonial = ({
  imgSrc,
  name,
  position,
  testimony,
  portrait = true,
  bgc,
}: {
  imgSrc: string,
  name: string,
  position: string,
  testimony: string
  portrait?: boolean
  bgc?: ResponsiveMixin
}) => {
  return (
    <Card bgc={bgc}>
      <Flex col $sx={{ gap: '12px' }}>
        <TwoCol growRight widthLeft="20%" hGap="12px">
          <img src={imgSrc}
            style={{
              borderRadius: portrait ? '50%' : 'initial'
            }}
          />
          <Flex col ass jcc $sx={{ height: '100%', gap: '8px'}}>
            <h3 style={{ margin: 0 }}>{name}</h3>
            <p style={{ margin: 0 }}>{position}</p>
          </Flex>
        </TwoCol>
        <p style={{ margin: '0' }}>
          {testimony}
        </p>
      </Flex>
    </Card>
  )
}

export const ThreeColTestimonial = () => {
  return (
    <ThreeCol>
    <>
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
  )
}