import hashlib

print("================================")
print("          Z-SCAN v1.0")
print("================================")


def calculate_file_hash(file_path):
    sha256 = hashlib.sha256()

    with open(file_path, "rb") as file:
        while True:
            data = file.read(4096)

            if not data:
                break

            sha256.update(data)

    return sha256.hexdigest()

file_path = input("Drag a file here and press Enter: ").strip().strip('"')

try:
    print("File fingerprint:", calculate_file_hash(file_path))
except FileNotFoundError:
    print("Error: File not found. Please check the file path.")
