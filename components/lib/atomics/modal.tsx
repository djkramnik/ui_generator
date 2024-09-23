import React from "react"
import { CssProps } from "../../theme"
import { Box } from "../layout"
import { Modal as MuiModal } from '@mui/material'
import { getComponentStyles } from "../../theme/variants"
import { useTheme } from "styled-components"

const DefaultCloseIcon = ({}) => {
  return (
    <i className={`fa-solid fa-xmark`}
      style={{ 
        fontSize: '40px',
        color: '#fff',
      }}
    />
  )
}

type ModalProps = {
  backgroundSx?: CssProps
  containerSx?: CssProps
  children?: React.ReactNode
  closeIcon?: React.ReactNode
  closeIconContainerSx?: CssProps
  open?: Boolean
  handleClose?: () => void
}

export const Modal = ({
  backgroundSx,
  containerSx,
  children,
  closeIcon,
  closeIconContainerSx,
  open,
  handleClose,
}: ModalProps) => {
  const theme = useTheme()
  return (
    <Box $sx={{
      display: open ? 'flex' : 'none',
      ...getComponentStyles('modalBackground', theme),
      ...backgroundSx,
    }}>
      <Box 
        onClick={handleClose}
      $sx={{
        ...getComponentStyles('modalCloseIconContainer', theme),
        ...closeIconContainerSx
      }}>
        {
          closeIcon === undefined
            ? <DefaultCloseIcon />
            : closeIcon
        }
      </Box>
      <Box $sx={{
        ...getComponentStyles('modalContainer', theme),
        ...containerSx,
      }}>
        {children}
      </Box>
    </Box>
  )
}

export const ChimericModal = (props: ModalProps & {
  mui?: boolean
}) => {
  const theme = useTheme()
  const { children, mui, open, handleClose, ...rest } = props
  if (mui) {
    return (
      <MuiModal disableEnforceFocus
        open={open === true} onClose={handleClose}>
        <Box $sx={{
          ...getComponentStyles('modalMuiContainer', theme),
          ...rest.containerSx,
        }}>
          {children}
        </Box>
      </MuiModal>
    )
  }
  return (
    <Modal {...rest} open={open} handleClose={handleClose}>
      {children}
    </Modal>
  )
}