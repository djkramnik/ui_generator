import React from "react"
import { CssProps } from "../../theme"
import { Box } from "../layout"
import { Modal as MuiModal } from '@mui/material'

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
}

export const Modal = ({
  backgroundSx,
  containerSx,
  children,
  closeIcon,
  closeIconContainerSx,
  open,
}: ModalProps) => {
  return (
    <Box $sx={{
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: open ? 'flex' : 'none',
      position: 'fixed',
      top: '0',
      left: '0',
      minWidth: '600px',
      minHeight: '600px',
      width: '100vw',
      height: '100vh',
      ...backgroundSx,
    }}>
      <Box $sx={{
        position: 'absolute',
        top: '8px',
        right: '8px',
        cursor: 'pointer',
        ...closeIconContainerSx
      }}>
        {
          closeIcon === undefined
            ? <DefaultCloseIcon />
            : closeIcon
        }
      </Box>
      <Box $sx={{
        margin: 'auto',
        backgroundColor: '#fff',
        width: '45vw',
        minWidth: '500px',
        height: '40vw',
        minHeight: '300px',
        ...containerSx,
      }}>
        {children}
      </Box>
    </Box>
  )
}

export const ChimericModal = (props: ModalProps & {
  mui?: boolean
  handleClose?: () => void
}) => {
  const { children, mui, open, handleClose, ...rest } = props
  if (mui) {
    return (
      <MuiModal disableEnforceFocus
        open={open === true} onClose={handleClose}>
        <Box $sx={{
          margin: 'auto',
          backgroundColor: '#fff',
          width: '45vw',
          minWidth: '500px',
          height: '40vw',
          minHeight: '300px',
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          ...rest.containerSx,
        }}>
          {children}
        </Box>
      </MuiModal>
    )
  }
  return (
    <Modal {...rest} open={open}>
      {children}
    </Modal>
  )
}