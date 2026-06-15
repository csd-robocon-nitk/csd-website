export function getProjectRoute(projectId) {
  const Id = Number(projectId)
  if (Id === 128) {
    return "/projects/e-mobility"
  }
  else if (Id === 132) {
    return "/projects/SRM"
  }
  return `/projects/${projectId}`
}

