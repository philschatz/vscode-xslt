# XSLT Debugger for VSCode

![xslt-debugger](https://user-images.githubusercontent.com/253202/76785314-383b2b80-6783-11ea-9d49-6e952757c098.gif)


## Steps to run

1. Make sure `java` is installed and available in the current path
1. Run `npm install` in this repo
1. Run [./prebuild.bash](./prebuild.bash) to make sure the XSLT jar is available (from [xslt-debug-adapter](https://github.com/philschatz/xslt-debug-adapter))
1. Open up the repo in VSCode and press <kbd>F5</kbd> to start a development instance of VSCode
1. Open a directory in the dev VSCode with an XSLT file and an input XML file
1. Create a launch config.json that has this in it:

```js
{
  "configurations": [
    {
      "type": "xslt",
      "request": "launch",
      "name": "Debug XSLT File",
      "program": "${workspaceFolder}",
      "xslPath": "{insert_absolute_path_to_the_xsl_file}.xsl",
      "sourcePath": "{insert_absolute_path_to_the_input_file}",
      "destinationPath": "{insert_absolute_path_to_the_output_file}"
    }
  ]
}
