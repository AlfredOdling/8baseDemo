import Modal from '@mui/joy/Modal'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'
import { usePrompts } from '../../shared/api'
import { useState } from 'react'
import { Button, IconButton, Input, Stack, Textarea } from '@mui/joy'
import { LiaPlusSolid, LiaTrashSolid } from 'react-icons/lia'

export default function BasicModal({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: any
}) {
  const usePrompts_ = usePrompts()

  const EditPrompt = ({ item }: any) => {
    const [value, setvalue] = useState(item.prompt)

    return (
      <Stack direction={'row'} spacing={2}>
        <Textarea minRows={2} key={item.id} value={value} onChange={setvalue} />

        <IconButton
          variant="solid"
          size="sm"
          //   onClick={() => setModalOpen(!modalOpen)}
        >
          <LiaTrashSolid />
        </IconButton>
      </Stack>
    )
  }

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: 500,
          borderRadius: 'md',
          p: 3,
          boxShadow: 'lg',
        }}
      >
        <Typography component="h2" level="h4" mb={1}>
          Edit prompts
        </Typography>

        {usePrompts_.query.data?.map((item: any) => (
          <EditPrompt item={item} />
        ))}

        <IconButton
          variant="solid"
          size="sm"
          sx={{ mt: 2 }}
          //   onClick={() => setModalOpen(!modalOpen)}
        >
          <LiaPlusSolid />
        </IconButton>

        <Stack direction="row" spacing={2} mt={4}>
          <Button onClick={() => setOpen(false)} fullWidth>
            Close
          </Button>

          <Button variant="outlined" fullWidth>
            Save
          </Button>
        </Stack>
      </Sheet>
    </Modal>
  )
}
