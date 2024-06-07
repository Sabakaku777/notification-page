import { useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  const [notifications, setNotification] = useState(data);
  const notificationCounter = notifications.filter(
    (number) => !number.isred
  ).length;
  console.log(notificationCounter);
  return (
    <div className="container">
      <div className="header">
        <h2>
          Notifications <span>{notificationCounter}</span>
        </h2>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => {
            const newNotifications = notifications.map((notification) => {
              return { ...notification, isred: true };
            });
            setNotification(newNotifications);
          }}
        >
          Mark all as read
        </p>
      </div>
      {notifications.map((notification) => {
        return (
          <div key={notification.id} className="mtavari">
            <div
              style={
                !notification.isred ? { backgroundColor: "#F7FAFD" } : null
              }
              className="notification-container"
              onClick={() => {
                const newNotification = notifications.map((message) => {
                  if (notification.id === message.id) {
                    return { ...message, isred: true };
                  }
                  return message;
                });

                setNotification(newNotification);
              }}
            >
              <div className="content">
                <img src={notification.profImage} />
                <span className="username">{notification.username}</span>
                <span className="action">{notification.action}</span>
                {notification.post ? (
                  <span className="post">{notification.post}</span>
                ) : null}
                {notification.club ? (
                  <span className="club">{notification.club}</span>
                ) : null}
                {!notification.isred ? <div className="red"></div> : null}
              </div>
              <span className="time">{notification.time}</span>
              {notification.text ? (
                <p className="text">{notification.text}</p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
