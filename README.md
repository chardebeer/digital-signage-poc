# Digital Signage Webview Examople

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by scanning the **QR code** or use the iOS or Android emulators. When you're done, click **Save** and share the link!

When you're ready to see everything that Expo provides (or if you want to use your own editor) you can **Download** your project and use it with [expo cli](https://docs.expo.dev/get-started/installation/#expo-cli)).

All projects created in Snack are publicly available, so you can easily share the link to this project via link, or embed it on a web page with the `<>` button.

If you're having problems, you can tweet to us [@expo](https://twitter.com/expo) or ask in our [forums](https://forums.expo.dev/c/expo-dev-tools/61) or [Discord](https://chat.expo.dev/).

Snack is Open Source. You can find the code on the [GitHub repo](https://github.com/expo/snack).

## [Prerequisites](https://docs.expo.dev/tutorial/create-your-first-app/#prerequisites)

We'll need the following tools to get started:

-   Install  [Expo Go](https://expo.dev/client)  on a physical device.
-   Prepare for development by  [installing the required tools](https://docs.expo.dev/get-started/installation/#requirements).



## [Initialize a new Expo app](https://docs.expo.dev/tutorial/create-your-first-app/#initialize-a-new-expo-app)

We will use  [`create-expo-app`](https://docs.expo.dev/more/glossary-of-terms/#create-expo-app)  to initialize a new Expo app. It is a command line tool that allows to create a new React Native project with the  `expo`  package installed.

It will create a new project directory and install all the necessary dependencies to get the project up and running locally. Run the following command in your terminal: :)


**Create a project named StickerSmash**

    npx create-expo-app StickerSmash

  
Navigate to the project directory`

    cd StickerSmash

This command will create a new directory for the project with the name:  **StickerSmash**.


## [Download assets](https://docs.expo.dev/tutorial/create-your-first-app/#download-assets)

[](https://docs.expo.dev/static/images/tutorial/sticker-smash-assets.zip)

Download assets archive

We'll be using these assets throughout this tutorial.

After downloading the archive, unzip it and replace the existing  **assets**  directory with it in the project directory. This will override the default assets created when the new project was initialized.

Now, let's open the project directory in our favorite code editor or IDE. Throughout this tutorial, we will use VS Code for our examples.

## [Install dependencies](https://docs.expo.dev/tutorial/create-your-first-app/#install-dependencies)

To run the project on the web, we need to install the following dependencies that will help to run the project on the web:

    npx expo install react-dom react-native-web @expo/webpack-config


## [Run the app on mobile and web](https://docs.expo.dev/tutorial/create-your-first-app/#run-the-app-on-mobile-and-web)

In the project directory, run the following command to start a  [development server](https://docs.expo.dev/more/glossary-of-terms/#development-server)  from the terminal:

    npx expo start

Once the development server is running, the easiest way to launch the app is on a physical device with Expo Go. For more information, see  [Open app on a device](https://docs.expo.dev/get-started/create-a-project/#open-the-app-on-your-device).

To see the web app in action, press  w  in the terminal. It will open the web app in the default web browser.

Once it is running on all platforms, the project should look like this:

![App running on an all platforms](https://docs.expo.dev/static/images/tutorial/01-app-running-on-all-platforms.jpg)

The text displayed on the app's screen above can be found in the  **App.js**  file which is at the root of the project's directory. It is the entry point of the project and is executed when the development server starts.




