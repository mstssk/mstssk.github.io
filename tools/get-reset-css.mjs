import { writeFileSync } from "node:fs";

const tag = await getLatestReleaseTag();
const css = await fetchCSS(tag);
writeFileSync("docs/reset.css", css);

async function getLatestReleaseTag() {
  const url = "https://api.github.com/repos/mayank99/reset.css/releases";
  const res = await fetch(url);
  const data = await res.json();
  /** @type string */
  const tag = data[0].tag_name;
  return tag;
}

async function fetchCSS(tag) {
  const url = `https://raw.githubusercontent.com/mayank99/reset.css/refs/tags/${tag}/package/index.css`;
  const res = await fetch(url);
  const file = await res.text();
  return `/*! https://github.com/mayank99/reset.css ${tag} */\n\n${file}`;
}
