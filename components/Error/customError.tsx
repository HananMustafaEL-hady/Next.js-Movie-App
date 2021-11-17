import { AxiosError } from "axios";

export class BadRequestError extends Error {
  data: AxiosError;
  constructor(error: AxiosError) {
    super(error.message);

    this.data = error;
  }
}

export class NotFoundError extends Error {
  data: AxiosError;
  constructor(error: AxiosError) {
    super(error.message);

    this.data = error;
  }
}

