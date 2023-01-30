export const JobStatus = {
  RECEIVED: "Received", // Initial state
  ACCEPTED: "Accepted", // Rows have been added to queue, not errors thus far
  UNPROCESSABLE: "Unprocessable", // Unable to process one or many rows from the file
  FAILED: "Failed", // Failed to import one or many rows
} as const;

export type AnyJobStatus = typeof JobStatus[keyof typeof JobStatus];
