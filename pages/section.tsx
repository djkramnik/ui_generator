import { useTheme } from "styled-components"
import { DashboardSection } from "../components/lib/section"
import { RandomBrandLogo } from "../components/lib/super_components/brand"

const SectionsGallery = () => {
  const theme = useTheme()
  return (
    <DashboardSection
      navbarShortcutProps={{
        logo: <RandomBrandLogo />,
        links: [['v5.0.0', 'Contact Us', 'Sign in']],
        dropdowns: [[0, 0]]
      }}
      sidebarChildren={'bye'}
      >
      hi
    </DashboardSection>
  )
}

export default SectionsGallery