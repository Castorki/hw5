import { configureStore } from '@reduxjs/toolkit';

const reducer = (state = localStorage.getItem('theme') || 'темную', action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        const newTheme = state === 'светлую' ? "темную" : "светлую";
        localStorage.setItem('theme', newTheme);
        return newTheme;
      default:
        return state;
    }
  }

const store = configureStore({
    reducer: reducer,
})

export default store;