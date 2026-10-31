# Z-Scan

a python-based file scanner and malware detection project
Z-Scan is a personal project i'm developing to learn more about cybersecurity, python programming, and how antivirus software works.
the main goal is to create a program that can scan files, analyze their contents, and eventually detect known malware using different detection methods.

## 1. project goals

- learn how file scanning works
- understand SHA-256 hashing and how it can be used in cybersecurity
- build a basic malware signature detection system
- improve my python programming skills
- learn how to organize and manage a software project using Git and GitHub

## 2. tools and technologies

- Python 3.13, main programming language
- hashlib, calculating file hashes
- PyCharm, writing and testing code
- Git, tracking changes
- GitHub, hosting the project

## 3. how the code works

the current version of Z-Scan uses python's hashlib library to calculate SHA-256 fingerprints of files.
it opens files in binary mode and reads them in 4096-byte chunks. each chunk is added to the hashing process until the entire file has been read.
once finished, the program returns the SHA-256 hash as a hexadecimal string.
this fingerprint can later be compared against a database of known malware signatures to help identify suspicious files.

## 4. current limitations

at the moment, Z-Scan can calculate file hashes, but it cannot detect viruses yet.
the signature detection system is still planned for a future version.
also, not finding a matching signature does not guarantee that a file is safe.
