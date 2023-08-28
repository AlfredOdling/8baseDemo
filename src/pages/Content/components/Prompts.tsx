import { useAuth0 } from '@auth0/auth0-react'
import { LiaPlusSolid, LiaSpinnerSolid } from 'react-icons/lia'
import { ActionIcon, Grid, Group, Title } from '@mantine/core'

import { Prompt } from './Prompt'
import { usePromptCreate } from '../../../api/usePrompts/promptCreate'
import { usePromptsList } from '../../../api/usePrompts/promptList'

export const Prompts = ({ selectValue, urlValue }: any) => {
  const promptCreate = usePromptCreate()
  const promptsList = usePromptsList()
  const { user } = useAuth0()

  const sortedcreatedAt = promptsList?.data?.sort((a: any, b: any) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  if (promptsList.isLoading) {
    return <LiaSpinnerSolid color="white" />
  }

  return (
    <>
      <Group sx={{ width: '100%', marginTop: 10 }} spacing={20}>
        <Title color={'white'} order={4}>
          Prompts
        </Title>

        <ActionIcon
          variant="solid"
          size="lg"
          onClick={() =>
            promptCreate.mutate({
              user: {
                connect: {
                  email: user?.email,
                },
              },
            })
          }
        >
          {promptCreate.isLoading ? <LiaSpinnerSolid /> : <LiaPlusSolid />}
        </ActionIcon>
      </Group>

      <Grid
        grow
        gutter={15}
        sx={{
          flexGrow: 1,
          padding: 10,
          maxHeight: '400px',
          overflowY: 'auto',
          overflowX: 'hidden',
          boxShadow:
            'inset 5px 5px 10px rgba(32, 31, 41, 0.2), inset -5px -5px 10px rgba(22, 21, 31, 0.3)',
        }}
      >
        {sortedcreatedAt?.map((item: any) => (
          <Prompt
            key={`${item.id}-promt`}
            item={item}
            selectValue={selectValue}
            urlValue={urlValue}
          />
        ))}
      </Grid>
    </>
  )
}
