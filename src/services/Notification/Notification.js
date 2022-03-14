import "./Notification.css";
import React, { useState, useContext } from "react";

export const Notification = ({message = "prueba", severity= ""}) => {
 
    const notificationStyle = {
        position: "absolute",
        top: 5,
        right: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
        width: "auto",
        height: "auto",
        color: "white",
        padding: "10px 20px 10px 20px",
    }

    const config = true ?
    {
        style: notificationStyle,
        className: severity === 'success' ? 'Success' : 'Error'
    } : {}

    if (message === "") {
        return null
    }

    return (
        <div {...config}>
            {message}
        </div>
    )
}

const NotificationContext = React.createContext();

export const NotiProvider = ({children}) => {

    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("");

    const setNotification = (message, severity) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage("");
        }, 5000)
    }

    return (
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationServices = () => {
    return useContext(NotificationContext)
}

