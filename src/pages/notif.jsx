import React from 'react';
import Framework7 from 'framework7';
import { Dom7 } from 'framework7-react';

class Notifications extends React.Component {
  componentDidMount() {
    const app = new Framework7();
    const $$ = Dom7;

    // Create full-layout notification
    const notificationFull = app.notification.create({
      icon: '<i className="icon demo-icon">7</i>',
      title: 'Framework7',
      titleRightText: 'now',
      subtitle: 'This is a subtitle',
      text: 'This is a simple notification message',
      closeTimeout: 3000,
    });

    // Create notification with close button
    const notificationWithButton = app.notification.create({
      icon: '<i className="icon demo-icon">7</i>',
      title: 'Framework7',
      subtitle: 'Notification with close button',
      text: 'Click (x) button to close me',
      closeButton: true,
    });

    // Create notification with click to close
    const notificationClickToClose = app.notification.create({
      icon: '<i className="icon demo-icon">7</i>',
      title: 'Framework7',
      titleRightText: 'now',
      subtitle: 'Notification with close on click',
      text: 'Click me to close',
      closeOnClick: true,
    });

    // With callback on close
    const notificationCallbackOnClose = app.notification.create({
      icon: '<i className="icon demo-icon">7</i>',
      title: 'Framework7',
      titleRightText: 'now',
      subtitle: 'Notification with close on click',
      text: 'Click me to close',
      closeOnClick: true,
      on: {
        close: function () {
          app.dialog.alert('Notification closed');
        },
      },
    });

    // Open Notifications
    $$('.open-full').on('click', function () {
      notificationFull.open();
    });
    $$('.open-with-button').on('click', function () {
      notificationWithButton.open();
    });
    $$('.open-click-to-close').on('click', function () {
      notificationClickToClose.open();
    });
    $$('.open-callback-on-close').on('click', function () {
      notificationCallbackOnClose.open();
    });
  }

  render() {
    return (
      <div className="block">
        <p>
          <a className="button button-raised open-full" href="#">Full-layout notification</a>
        </p>
        <p>
          <a className="button button-raised open-with-button" href="#">With close button</a>
        </p>
        <p>
          <a className="button button-raised open-click-to-close" href="#">Click to close</a>
        </p>
        <p>
          <a className="button button-raised open-callback-on-close" href="#">Callback on close</a>
        </p>
      </div>
    );
  }
}

export default Notifications;
