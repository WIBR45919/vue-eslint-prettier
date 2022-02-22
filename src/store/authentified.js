export function mustBeAuthenticated(){

  return {

    getIsAuthenticated(){
      if (localStorage.getItem("token"))
            return true;
      else
        return false;
    },
  }
};