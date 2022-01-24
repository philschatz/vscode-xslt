# XSLT Debugger for VSCode

![xslt-debugger](https://user-images.githubusercontent.com/253202/77986979-307c9a80-72de-11ea-874f-f335133f451e.gif)

This debugger allows you to set breakpoints in the XSL file _and_ the source XML document. If a breakpoint is set in the source XML document then every template that matches the breakpoint will pause.

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
      "destinationPath": "${workspaceFolder}/my_output.xml",
      "parameters": {
        "theseAreOptional": true,
        "andCanBeOmmittedIfYou": "do not use them"
      }
    }
  ]
}
```

## Windows Users

Users of Windows Subsystem for Linux (WSL) have reported problems with breakpoints. Installing OpenJDK 11+ [seems to fix the problem](https://marketplace.visualstudio.com/items?itemName=philschatz.vscode-xslt&ssr=false#review-details).

```
WSL: sudo apt install default-jre
js@JS-DESKTOP:/mnt/d/Temp/psh/xslt_debug$ java -version
openjdk version "11.0.13" 2021-10-19
OpenJDK Runtime Environment (build 11.0.13+8-Ubuntu-0ubuntu1.18.04)
OpenJDK 64-Bit Server VM (build 11.0.13+8-Ubuntu-0ubuntu1.18.04, mixed mode, sharing)

Success: hits Breakpoint!
```

## Local Development

1. Run `npm install` in this repo
1. Run [./prebuild.bash](./prebuild.bash) to make sure the XSLT jar is available (from [xslt-debug-adapter](https://github.com/philschatz/xslt-debug-adapter))
1. Open up the repo in VSCode and press <kbd>F5</kbd> to start a development instance of VSCode
1. Open a directory in the dev VSCode with an XSLT file and an input XML file
1. Create a launch config.json as shown above and press Run
