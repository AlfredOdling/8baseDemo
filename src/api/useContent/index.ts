import { useContentUpdate } from './contentUpdate'
import { useContentTextsList } from './contentTextsList'
import { useContentsList } from './contentsList'
import { useContent_ } from './content'
import { useContentCreate } from './contentCreate'
import { useContentDelete } from './contentDelete'

export const useContent = (contentId?: string) => ({
  contentUpdate: useContentUpdate(),
  contentTextsList: useContentTextsList(),
  contentsList: useContentsList(),
  contentCreate: useContentCreate(),
  content: useContent_(contentId!),
  contentDelete: useContentDelete(),
})
