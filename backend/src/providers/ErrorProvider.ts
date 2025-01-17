import { errors } from "./DataProvider";
import { typeStatus } from "./TypeProvider";

class ErrorProvider {
  constructor() {}

  getError(status: typeStatus) {
    return this.classifyError(status);
  }

  classifyError(status:typeStatus): string {
    const index = errors.findIndex((prev) => prev.status === status);
    const message = errors[index]?.message
    return message ? message : "Unknown error occured";
  }
}

const Error = new ErrorProvider();

export default Error;
