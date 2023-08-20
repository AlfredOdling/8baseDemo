import { useUpdateUser } from './updateUser'

export function useUser() {
  return { updateUser: useUpdateUser() }
}
