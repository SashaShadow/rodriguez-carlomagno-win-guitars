
import React, { useState } from "react";

export const Notification = ({message = "prueba", severity= ""}) => {
 
    const notificationStyle = {
        position: "absolute",
        top: 5,
        right: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
        backgroundColor: severity === "success" ? "green" : "red", 
        width: "auto",
        height: "auto",
        padding: "10px 20px 10px 20px",
    }

    if (message === "") {
        return null
    }

    return (

        <div style={notificationStyle}>
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

export default NotificationContext;