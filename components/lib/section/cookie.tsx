import { useThemeHelper } from "../../hooks"
import { Button, Copy } from "../atomics"
import { Box } from "../layout"

export const CookieSection = ({
  agreeLabel = 'Agree',
  disagreeLabel = 'Reject',
  customizeLabel,
  rigamarole,
  open,
  handleClose,
}: {
  rigamarole: string
  agreeLabel?: string
  disagreeLabel?: string
  customizeLabel?: string
  open?: boolean
  handleClose?: () => void
}) => {
  const { hookSc } = useThemeHelper()
  if (!open) {
    return null
  }
  return (
    <Box $sx={hookSc('cookieSection')}>
      <Box $sx={hookSc('cookieInner')}>
        <Copy $sx={hookSc('cookieCopy')}>
          {rigamarole}
        </Copy>
        <Box $sx={hookSc('cookieOptions')}>
          <Button onClick={handleClose}
          $sx={hookSc('cookieOption')}>
            {agreeLabel}
          </Button>
          {
            customizeLabel
              ? (
                <Button onClick={handleClose}
                $sx={hookSc('cookieOption')}>
                  {customizeLabel}
                </Button>
              )
              : null
          }
          <Button onClick={handleClose}
          $sx={{
            ...hookSc('cookieOption'),
            ...hookSc('cookieReject')
          }}>
            {disagreeLabel}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}