import { useGenerateContentText } from './generateContentText'
import { useContentTexts } from './contentText'
import { useContentsList } from './contentsList'
import { useContent_ } from './content'
import { useContentCreate } from './contentCreate'
import { useContentDelete } from './contentDelete'

export const useContent = (contentId?: string) => ({
  generateContentText: useGenerateContentText(),
  contentTexts: useContentTexts(),
  contentsList: useContentsList(),
  contentCreate: useContentCreate(),
  content: useContent_(contentId!),
  contentDelete: useContentDelete(),
})
