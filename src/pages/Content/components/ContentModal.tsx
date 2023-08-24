import {
  Modal,
  ModalClose,
  Sheet,
  Typography,
} from '../../../shared/components/base'

export const BasicModal = ({ open, setOpen, item }: any) => {
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 3,
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 800,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
            maxHeight: '500px',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.surface',
            }}
          />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            {item.prompt}
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            {item.text}
          </Typography>
        </Sheet>
      </Modal>
    </>
  )
}
