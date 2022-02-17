import { NotificationsActionsTypes } from "./notifications.types"

export const triggerNotifications = () => ({
    type: NotificationsActionsTypes.TRIGGER_NOTIFICATIONS,
})

export const triggerNotificationsOff = () => ({
    type: NotificationsActionsTypes.TRIGGER_NOTIFICATIONSOFF,
})

export const notificationsMessage = message => ({
    type: NotificationsActionsTypes.SET_MESSAGE,
    payload: message
})