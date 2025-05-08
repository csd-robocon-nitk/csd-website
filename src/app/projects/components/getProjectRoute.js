export function getProjectRoute(projectId) {
   
    if (projectId === 11) {
      return "/projects/e-mobility"
    }
   else if (projectId === 13) {
      return "/projects/SRM"
    }
    return `/projects/${projectId}`
  }
  
  