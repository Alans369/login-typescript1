
export interface UserDto{
  "email": string,
  "name": string,
  "password": string,
  "role": string,
}

export interface ProductDto{
  "title": string,
  "price": number,
  "description": string,
  "categoryId": number,
  "images": string[]
}