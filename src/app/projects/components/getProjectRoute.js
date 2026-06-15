export function getProjectRoute(projectId) {
  const Id = Number(projectId)
  if (Id === 17 || Id === 128) {
    return "/projects/e-mobility"
  }
  else if (Id === 19 || Id === 132) {
    return "/projects/SRM"
  }
  return `/projects/${projectId}`
}

