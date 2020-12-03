import emojipedia from "./emojipedia";

var meaning = emojipedia.map(function (emojis) {
  return emojis.meaning.substring(0, 100);
});
console.log(meaning);
