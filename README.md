# pseudo-translate-cli

CLI to translate a JSON file to a pseudo language with expanded characters.
Makes use of [rorsini's
pseudo-translate](https://github.com/rorsini/pseudo-translate) package to take a JSON file and output the same contents in a 
pseudo language, 
optionally expanded by 30%.

## How to install

```bash
$ npm i -g pseudo-translate-cli
```

## How to use

Call the cli command and pass it a JSON file, and it will return the same JSON with pseudo translations.
Given a file called translations.json, with the contents:
```json
{
  "error": "This is an error.",
  "messages": {
    "ok": "Ok",
    "No": "No"
  }
}
```

Using the cli command like this:
```bash
$ pseudo-translate-cli -i translations.json
```

Will result in 
```
pseudo-translate-cli -i translations.json
{
 "error": "«Thïs ïs äñ éřřöř.»",
 "messages": {
  "ok": "«Ök»",
  "No": "«Ñö»"
 }
}
```

You can optionally pass `-e` to expand the pseudo translation by 30%. This can be useful to check if designs will still work with languages that usually take more characters for the translation, like German and Dutch.
