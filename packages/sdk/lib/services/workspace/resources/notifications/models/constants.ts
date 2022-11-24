export const NotificationType = {
  INFO: "Info",
  IMPORT: "Import",
} as const;

export type AnyNotificationType =
  typeof NotificationType[keyof typeof NotificationType];

export const NotificationTypeEnum = [
  NotificationType.INFO,
  NotificationType.IMPORT,
];
