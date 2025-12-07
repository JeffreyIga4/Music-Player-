# React Music Player

A simple and modern music player built with React and Vite.  
It lets you play songs, view progress, switch tracks, control volume, and manage playlists.

---

## How to Use

- Select a song from the **All Songs** list to start playing.  
- Use the **Play / Pause**, **Next**, and **Previous** buttons to control playback.  
- Drag the **progress bar** to seek through the track.  
- Adjust the **volume slider** to change the audio level.  
- Create playlists and add songs to organize your music.

---

## Run the App Locally

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Download and place songs into:
```swift
public/songs/
```


---


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
