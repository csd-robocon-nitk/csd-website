export function getProjectRoute(projectId) {
   
    if (projectId === 11) {
      return "/projects/e-mobility"
    }
   else if (projectId === 2) {
      return "/projects/SRM"
    }
    return `/projects/${projectId}`
  }
  
  