const {
  REACT_APP_AUTH0_DOMAIN,
  REACT_APP_AUTH0_CLIENT_ID,

  REACT_APP_NETLIFY_AUTH0_DOMAIN,
  REACT_APP_NETLIFY_AUTH0_CLIENT_ID,
} = process.env
console.log('🚀🚀🚀🚀  process.env:', process.env)

export const env = {
  AUTH0_DOMAIN:
    process.env.NODE_ENV === 'development'
      ? REACT_APP_AUTH0_DOMAIN
      : REACT_APP_NETLIFY_AUTH0_DOMAIN,

  AUTH0_CLIENT_ID:
    process.env.NODE_ENV === 'development'
      ? REACT_APP_AUTH0_CLIENT_ID
      : REACT_APP_NETLIFY_AUTH0_CLIENT_ID,
}
