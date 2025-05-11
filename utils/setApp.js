// utils/setApp.js
export function setWindowApp(app) {
  if (typeof window !== 'undefined') {
    window.app = app;
    console.log('tldraw app initialized:', window.app);
  }
}
