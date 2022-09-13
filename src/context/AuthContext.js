import React,{createContext, useState} from 'react'


const AuthContext = createContext();
AuthProvider = AuthContext.Provider;

function AuthContextProvider() {

    const [success, setSuccess] = useState("false");
    const [error, setError] = useState("null");
    const [user, setUser] = useState("null")

  // signup function
  const authRegister = async (username, email, password) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "content-Type": "application/json",


      },
      body: json.stringgify({
        username,
        email,
        password,

      }),
    })
      .Then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSuccess(true);
        setUser(data);
      })
    .catch ((err) => {
    console.log(err);
    setError(err);
    });
    setLoading(false)

  };

  return (
    <div>
      
    </div>
  )
}

export default AuthContextProvider
