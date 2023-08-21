import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import { LiaSpinnerSolid, LiaTrashSolid } from 'react-icons/lia'
import {
  Stack,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
  Grid,
  Divider,
} from '@mui/joy'
import { useMediaQuery } from 'react-responsive'

import { Prompts } from './components/Prompts'
import { useContentTextDelete } from '../../api/useContent/contentTextDelete'
import { useContent } from '../../api/useContent/content'
import { neumorph } from '../../shared/styles'
import { IconButton } from '../../shared/components/IconButton'

export function Content() {
  const [selectValue, setSelectValue] = useState<string | null>('website')
  const [textValue, setTextValue] = useState('')
  const [urlValue, setUrlValue] = useState('')

  const { contentId } = useParams()
  const content = useContent(contentId!)
  const contentTextDelete = useContentTextDelete()
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  return (
    <Stack
      width={'75%'}
      maxWidth={'800px'}
      alignItems={'flex-start'}
      p={3}
      spacing={3}
      sx={{
        ...neumorph,
      }}
    >
      <Typography textColor={'white'} level="h4">
        Subject: {content.data?.title || 'Untitled'}
      </Typography>

      <Stack
        direction={'row'}
        spacing={1}
        alignItems={'flex-start'}
        width={'100%'}
      >
        {selectValue === 'text' ? (
          <Textarea
            value={textValue}
            onChange={e => setTextValue(e.target.value)}
            minRows={4}
            sx={{
              width: '100%',
              backgroundColor: 'transparent',
              color: 'white',
            }}
          />
        ) : (
          <Input
            sx={{
              backgroundColor: 'transparent',
              color: 'white',
              border: 'none',
              boxShadow:
                'inset 5px 5px 10px rgba(32, 31, 41, 0.2), inset -5px -5px 10px rgba(22, 21, 31, 0.3)',
            }}
            fullWidth
            value={urlValue}
            onChange={e => setUrlValue(e.target.value)}
            placeholder="Add your URL here"
          />
        )}

        <Select
          value={selectValue}
          onChange={(_, val) => setSelectValue(val)}
          sx={{
            ...neumorph,
            width: isMobile ? '200px' : '140px',
            color: 'white',
            border: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
            },
            '& .MuiSelect-indicator': {
              '--Icon-color': 'white',
            },
          }}
        >
          <Option value="website">Website</Option>
          <Option value="youtube">YouTube</Option>
          {/* <Option value="text">Text</Option> */}
        </Select>
      </Stack>
      {textValue ||
        (urlValue && (
          <>
            <Prompts
              selectValue={selectValue}
              urlValue={urlValue}
              textValue={textValue}
            />

            <Typography textColor={'white'} level="h4">
              Content
            </Typography>

            {content.data?.isLoading ? (
              <Typography level="h3">Loading...</Typography>
            ) : (
              <Grid container width={'100%'} spacing={2} sx={{ flexGrow: 1 }}>
                {content.data?.contentText?.items?.map((item: any) => (
                  <Grid xs={12} md={6} key={`${item.id}-content`}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
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
                            Prompt: {item.prompt}
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
            )}
          </>
        ))}
    </Stack>
  )
}
