export function getProjectRoute(projectId) {
   
    if (projectId === 1) {
      return "/projects/e-mobility"
    }
  
    return `/projects/${projectId}`
  }
  
  