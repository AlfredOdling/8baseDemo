import { usePromptCreate } from './promptCreate'
import { usePromptDelete } from './promptDelete'
import { usePromptsList } from './promptList'
import { usePromptUpdate } from './promptUpdate'

export const usePrompts = () => ({
  promptCreate: usePromptCreate(),
  promptDelete: usePromptDelete(),
  promptsList: usePromptsList(),
  promptUpdate: usePromptUpdate(),
})
