import { LiaSpinnerSolid, LiaTrashSolid } from 'react-icons/lia'
import { Stack, Typography, Grid, Divider } from '@mui/joy'
import { motion } from 'framer-motion'

import { useContentTextDelete } from '../../../api/useContent/contentTextDelete'
import { neumorph } from '../../../shared/styles'
import { IconButton } from '../../../shared/components/IconButton'

export const Content = ({ content }: any) => {
  const contentTextDelete = useContentTextDelete()

  return (
    <>
      <Typography textColor={'white'} level="h4">
        Content
      </Typography>

      <Grid container width={'100%'} spacing={2} sx={{ flexGrow: 1 }}>
        {content.data?.contentText?.items?.map((item: any) => (
          <Grid xs={12} md={6} key={`${item.id}-content`}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Stack
                key={`${item.id}-content`}
                height={'200px'}
                p={1.5}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
                sx={{
                  ...neumorph,
                }}
              >
                <Stack spacing={2}>
                  <Typography
                    textColor={'white'}
                    fontWeight={'bold'}
                    sx={{
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: '1',
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {item.prompt}
                  </Typography>
                  <Divider />

                  <Typography
                    textColor={'white'}
                    sx={{
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: '3',
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {item.text}
                  </Typography>
                </Stack>

                <IconButton
                  variant="solid"
                  size="sm"
                  onClick={() =>
                    contentTextDelete.mutate({
                      id: item.id,
                    })
                  }
                >
                  {contentTextDelete.isLoading ? (
                    <LiaSpinnerSolid />
                  ) : (
                    <LiaTrashSolid />
                  )}
                </IconButton>
              </Stack>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
