const API_BASE_URL = 'http://localhost:3000';

export const signup = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    // First check if the response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Server returned non-JSON response');
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Signup failed');
    }

    return data;
  } catch (error) {
    if (error.message === 'Server returned non-JSON response') {
      throw new Error('Unable to connect to the server. Please try again later.');
    }
    throw error;
  }
}; 

export const signin = async(userData)=>{
  try{
    const responseSignin = await fetch(`${API_BASE_URL}/user/signin`,{
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body : JSON.stringify(userData),
    });

    const contentType = responseSignin.headers.get('content-type');
    if(!contentType || !contentType.includes('application/json')){
      throw new Error('Server returned non-JSON response');
    }

    const data = await responseSignin.json();

    if(!responseSignin.ok){
      throw new Error(data.message || "Sign in failed");
    }

    return data;


  }catch(error){
    if(error.message === "Server returned non-JSON response"){
      throw new Error('Unable to connect to the server. Please try again later');
    }
    throw error;
  }
}