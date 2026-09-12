# Kilzz TempMail — Android project

This project wraps the existing Kilzz TempMail HTML/PWA in a Capacitor Android application.

## Requirements
- Node.js 20+
- Android Studio with an Android SDK
- JDK 17
- Internet access for npm/Gradle dependencies

## Build
```bash
npm install
npx cap add android
npx cap sync android
npx cap open android
```

Then build/install the APK from Android Studio.

### Important
The HTML already contains its polling-based inbox refresh and notification UI.
A native Android wrapper does not magically turn the current `/inbox` polling endpoint
into true server-push notifications while the app is fully closed. For that, the backend
needs Web Push/FCM (or another push event source).

The package ID is:
`id.my.arras.kilzz.tempmail`
