export interface IUser {
  email: String | ''
  password: String | ''
}

export interface ILogin {
  "token": String,
  "refresh_token": String,
  "user": {
    "name": String,
    "email": String
  }
}