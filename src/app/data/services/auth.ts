import { getDebozeroCoreApiURL } from "@/app/lib/utlis";

interface RegisterUserProps {
    name: string,
    username: string,
    email: string,
    password: string,
    confirm_password: string,
}

const baseUrl = getDebozeroCoreApiURL();

export async function serviceUserRegister(userData: RegisterUserProps) {
    const url = new URL('/api/v1/users/register', baseUrl)

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...userData }),
            cache: "no-cache",
          });
      
          return response.json();
    } catch (error) {
        console.error('User Registration Failed !! ERROR : ', error)
    }
}