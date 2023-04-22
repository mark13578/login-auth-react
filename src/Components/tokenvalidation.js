
export const validateToken = (url) => {
    return dispatch => {
      let token = null, email = null;
      if(localStorage.getItem("token")){
        token = localStorage.getItem("token");
        email = localStorage.getItem("email");
      }
      if(token){
        axios.post("/simple-jwt-authentication/v1/token/validate", {},{headers: {"Authorization": "Bearer " + token}}).then(res => {
          if(res.data.data.status === 200){
            dispatch({type: actionTypes.VALIDATE_TOKEN_SUCCESS, token:token, email:email, redirectTo: url});
          }
        }).catch(err => {
          //TODO: HANDLE VALIDATION ERROR
        });
      }else{
        //TODO: HANDLE NO TOKEN
      }
    };
};