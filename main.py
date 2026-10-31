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


print("Z-Scan initialized!")

print("File fingerprint:", calculate_file_hash("sample.txt"))
