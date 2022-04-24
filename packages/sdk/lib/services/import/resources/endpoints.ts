import { ClientInstance } from "../../../client";

import UploadEndpoints from "./upload/endpoints";
import JobEndpoints from "./jobs/endpoints";

export class ImportEndpoints {
  readonly Jobs: JobEndpoints;
  readonly Upload: UploadEndpoints;

  constructor(readonly client: ClientInstance) {
    this.Jobs = new JobEndpoints(this.client);
    this.Upload = new UploadEndpoints(this.client);
  }
}
