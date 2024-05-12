# React Native Video App

This is a simple React Native video app that allows users to browse and watch videos. The app includes features like authentication, video search, and video playback.

## Features

- **Authentication**: Users can log in to access the app's features. User authentication is handled using the provided API.
- **Home**: Displays popular videos with a play button for each video. Users cannot watch videos without logging in. If the user is not logged in, they are prompted to log in before watching a video.
- **Search**: Allows users to search for videos. Displays search results in real-time as the user types.
- **Player**: Allows users to play selected videos. Displays the video player with playback controls.
- **Settings**: Displays user information and allows logged-in users to log out.

## Technologies Used

- React Native
- React Navigation
- Expo
- Context API for state management
- Fetch API for network requests
- Expo AV Video for video playback

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/vivekdogra2012/VideoApp.git

2. Install dependencies:

cd react-native-video-app
npm install

3. Run the app:

npm start

4. Follow the instructions in the terminal to run the app on an emulator or device.

## API References:

**Pexels API:** Used to fetch video content.
**Dummy JSON Auth API:** Used for user authentication.

Get users from: **https://dummyjson.com/users**
use the user's info from the above link to login.
