
export function signUp(user) {
    console.log("Sign up ",user)
    return {
        type: 'signup',
        value: user
    }
}
export function signIn(user) {
    return {
        type: "signin",
        value: user
    }
}
export function Loggedin(user) {
    return {
        type: "loggedin",
        value: user
    }
}

export function Search(data) {
     console.log("Auth action ", data)
    return {
        type: "find",
        value: data
    }
}

//function mySubmit(obj) {
  //  var pwdObj = document.getElementById('pwd');
    //var hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
    //hashObj.update(pwdObj.value);
    //var hash = hashObj.getHash("HEX");
    //pwdObj.value = hash;
 // }
  //<script src="https://cdnjs.cloudflare.com/ajax/libs/jsSHA/2.0.2/sha.js"></script>
  
 // <form>
   //   <input type="password" id="pwd" name="password" />
     // <input onclick="mySubmit(this)" type="submit">
  //</form>
