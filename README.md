## latest updates

Z-Scan now allows the user to choose which file they want to scan instead of relying on a fixed file name. the user can enter the file path directly into the terminal or drag and drop a file into it, making the scanning process easier and more flexible.

another improvement is the addition of basic error handling. if the user enters a file path that does not exist, Z-Scan detects the `FileNotFoundError` and displays a clear message asking the user to check the path instead of showing a long python traceback.

these updates make Z-Scan easier to use and help prevent unexpected errors when selecting files. they also make the project more reliable as i continue developing its scanning features.