import { useThemeHelper } from "../../hooks"
import { Button, Copy } from "../atomics"
import { Box } from "../layout"

export const CookieSection = ({
  agreeLabel = 'Agree',
  disagreeLabel = 'Reject',
  customizeLabel,
  rigamarole,
  open,
}: {
  rigamarole: string
  agreeLabel?: string
  disagreeLabel?: string
  customizeLabel?: string
  open?: boolean
}) => {
  const { hookSc } = useThemeHelper()
  if (!open) {
    return null
  }
  return (
    <Box $sx={hookSc('cookieSection')}>
      <Box $sx={hookSc('cookieInner')}>
        <Copy>
          {rigamarole}
        </Copy>
        <Box $sx={hookSc('cookieOptions')}>
          <Button $sx={hookSc('cookieOption')}>
            {agreeLabel}
          </Button>
          {
            customizeLabel
              ? (
                <Button $sx={hookSc('cookieOption')}>
                  {customizeLabel}
                </Button>
              )
              : null
          }
          <Button $sx={{
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