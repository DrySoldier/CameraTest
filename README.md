# Courier Test App

This app serves a login screen with validation, a home screen with a simple logo, and a camera pressable through the tab bar.

The camera can take pictures but will not save them to your camera roll, only stored in your local cache.

## Steps to run app

These steps are for a physical iOS device, as the camera cannot be tested on simulators

1. cd into repo with terminal
2. npm install
3. Open ios folder in XCode
4. Ensure the app is automatically being signed, and that the provisioning profile and team are selected (https://help.apple.com/xcode/mac/current/#/dev60b6fbbc7)
5. Plug your device into your computer, and select it as the device to build on
6. Build the app through XCode

This app also works on android, simply npm install and react-native run-android