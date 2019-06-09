
export function completedEnrollment(props, Router) {
  if (!props.session.user) {
    console.warn("User is not logged in - redirecting to auth")
    Router.push('/auth')
  }

  if (!props.organization) {
    console.warn("User has not completed enrollment - redirecting to auth")
    Router.push('/auth/create-organization')
  }
}