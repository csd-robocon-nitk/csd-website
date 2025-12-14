export function getProjectRoute(projectId) {
   
    if (projectId === 128) {
      return "/projects/e-mobility"
    }
   else if (projectId === 132) {
      return "/projects/SRM"
    }
    return `/projects/${projectId}`
  }
  
  