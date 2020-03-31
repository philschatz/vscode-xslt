# XSLT Debugger for VSCode

![xslt-debugger](https://user-images.githubusercontent.com/253202/77986979-307c9a80-72de-11ea-874f-f335133f451e.gif)


## Steps to run

1. Make sure `java` is installed and available in the current path
1. Create a launch config.json that contains something like the following in it (replace the `my_` files with yours)
1. Press Play in the Run panel

```json
{
  "configurations": [
    {
      "type": "xslt",
      "request": "launch",
      "name": "Debug XSLT File",
      "xslPath": "${workspaceFolder}/my_transform.xsl",
      "sourcePath": "${workspaceFolder}/my_input.xml",
      "destinationPath": "${workspaceFolder}/my_output.xml"
    }
  ]
}
```

## Local Development

1. Run `npm install` in this repo
1. Run [./prebuild.bash](./prebuild.bash) to make sure the XSLT jar is available (from [xslt-debug-adapter](https://github.com/philschatz/xslt-debug-adapter))
1. Open up the repo in VSCode and press <kbd>F5</kbd> to start a development instance of VSCode
1. Open a directory in the dev VSCode with an XSLT file and an input XML file
1. Create a launch config.json as shown above and press Run
