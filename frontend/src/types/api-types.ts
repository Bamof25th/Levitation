import { User } from "./types";

export type customError = {
  message: string;
};

export type MessageResponce = {
  success: string;
  message: string;
};
export type UserResponce = {
  success: string;
  user: User;
};
