# Improved Spell Checker for Code Mirror

NOTE: this is a fork => https://www.npmjs.com/package/codemirror-spell-checker

## Feature Updates
	- Update build process using webpack
	- Ignores numbers
	- If you have .aff and .dic files you can host them and load them for multilanguage functionality.

## Install

Via [npm](https://www.npmjs.com/package/codemirror-spell-checker-extended).
```
npm install codemirror-spell-checker-extended --save
```

## Build to contribute

```
npm run build:dev
```
or
```
npm run build:prod
```
# CodeMirror Spell Checker
Spell checking so simple, you can set up in 60 seconds. It will highlight any misspelled words in light red. Works great in conjunction with other CodeMirror modes, like GitHub Flavored Markdown.

[Demo](http://nextstepwebs.github.io/codemirror-spell-checker/)

![Screenshot](http://i.imgur.com/7yb5Nne.png)



```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/codemirror.spell-checker/latest/spell-checker.min.css">
<script src="https://cdn.jsdelivr.net/codemirror.spell-checker/latest/spell-checker.min.js"></script>
```

## Quick start
Once CodeMirror is installed and loaded, first provide CodeMirror Spell Checker with the correct CodeMirror function. Then, just set the primary mode to `"spell-checker"` and the backdrop mode to your desired mode. Be sure to load/require `overlay.min.js` if you haven't already.

```JS
CodeMirrorSpellChecker({
	codeMirrorInstance: CodeMirror,
	aff: url_to_dot_aff_file,
	dic: url_to_dot_aff_dic,
	locale: locale // ex: 'en_GB'
});

CodeMirror.fromTextArea(document.getElementById("textarea"), {
	mode: "spell-checker",
	backdrop: "gfm" // Your desired mode
});
```

That's it!

## Customizing
You can customize the misspelled word appearance by updating the CSS. All misspelled words will have the `.cm-spell-error` class.

```CSS
.CodeMirror .cm-spell-error{
	/* Your styling here */
}
```
