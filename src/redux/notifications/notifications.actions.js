import { NotificationsActionsTypes } from "./notifications.types"

export const triggerNotifications = (command) => ({
    type: NotificationsActionsTypes.TRIGGER_NOTIFICATIONS,
    payload: command
})

export const triggerNotificationsOff = () => ({
    type: NotificationsActionsTypes.TRIGGER_NOTIFICATIONSOFF,
})

