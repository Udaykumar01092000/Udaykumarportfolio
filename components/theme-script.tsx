import Script from "next/script";

const code = `(function () {
  try {
    var savedTheme = window.localStorage.getItem("theme");
    var theme = savedTheme === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = "dark";
  }
})();`;

export function ThemeScript() {
  return (
    <Script id="theme-script" strategy="beforeInteractive">
      {code}
    </Script>
  );
}
