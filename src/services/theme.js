import { ref } from "vue";

let theme = ref('light')

function detectColorScheme() {
  theme.value = 'light'
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") == "dark") {
      theme.value = "dark";
    }
  } else if (!window.matchMedia) {
    return false;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme.value = "dark";
  }

  if (theme.value == "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}
detectColorScheme();

export default {
  theme,
  toggle() {
    localStorage.setItem('theme', theme.value === 'light' ? 'dark' : 'light')
    console.log(theme.value)
    detectColorScheme()
  }
}