import { jwtDecode } from "jwt-decode";


interface JWTToken {
  exp: number;
}

export const isTokenExpired = (token: string): boolean => {
  try {
    const decodedToken = jwtDecode<JWTToken>(token);
    const currentTime = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error('Invalid token', error);
    return true; // Return true if token is invalid or decoding fails
  }
};
