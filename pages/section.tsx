import { NavbarLinks } from "../components/lib/applied"
import { Anchor } from "../components/lib/atomics"
import { DashboardSection } from "../components/lib/section"
import { StripeLogo } from "../components/svg"

const SectionsGallery = () => {
  return (
    <DashboardSection
      navbarChildren={
        <>
          <NavbarLinks wrapChildren>
            <StripeLogo />
          </NavbarLinks>
          <NavbarLinks>
            <Anchor href="#">
              About
            </Anchor>
            <Anchor href="#">
              Charities
            </Anchor>
            <Anchor href="#">
              Goodness
            </Anchor>
          </NavbarLinks>
        </>
      }
      sidebarChildren={'bye'}
      >
      hi
    </DashboardSection>
  )
}

export default SectionsGallery