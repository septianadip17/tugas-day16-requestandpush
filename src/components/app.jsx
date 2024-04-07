import React, { useState, useEffect } from 'react';
import { getDevice } from 'framework7/lite-bundle';
import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';

import Notification from './Notification'; // Assuming you have a Notification component
import Camera from './Camera'; // Assuming you have a Camera component
import capacitorApp from '../js/capacitor-app';
import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const device = getDevice();

  useEffect(() => {
    f7ready(() => {
      if (f7.device.capacitor) {
        capacitorApp.init(f7);
      }
    });
  }, []);

  const alertLoginData = () => {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  }

  return (
    <App>
      <Views tabs className="safe-areas">
        <View id="view-home" main tab tabActive url="/">
          <Page>
            <Navbar title="Home">
              <NavRight>
                <Link onClick={() => f7.notification.create({...}).open()}>Show Notification</Link>
                <Link href="/camera/">Open Camera</Link>
              </NavRight>
            </Navbar>
            {/* Your page content */}
          </Page>
        </View>

        <View id="view-catalog" name="catalog" tab url="/catalog/" />
        <View id="view-settings" name="settings" tab url="/settings/" />
      </Views>

      <Popup id="my-popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link onClick={() => f7.notification.create({...}).open()}>Show Notification</Link>
                <Link href="/camera/">Open Camera</Link>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
              <p>Popup content goes here.</p>
            </Block>
          </Page>
        </View>
      </Popup>

      <LoginScreen id="my-login-screen">
        <View>
          <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListInput
                type="text"
                name="username"
                placeholder="Your username"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
              />
              <ListInput
                type="password"
                name="password"
                placeholder="Your password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              />
            </List>
            <List>
              <ListButton title="Sign In" onClick={() => alertLoginData()} />
              <BlockFooter>
                Some text about login information.<br />Click "Sign In" to close Login Screen
              </BlockFooter>
            </List>
          </Page>
        </View>
      </LoginScreen>
    </App>
  );
}

export default MyApp;
