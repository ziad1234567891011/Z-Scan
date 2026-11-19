
let selectedFile = null;
const dropZone = document.getElementById("drop-zone");
const browseButton = document.getElementById("browse-button");
const fileInput = document.getElementById("file-input");

browseButton.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        displayFile(fileInput.files[0]);
    }
});

dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
});

dropZone.addEventListener("drop", (event) => {
    event.preventDefault();

    const files = event.dataTransfer.files;

    if (files.length > 0) {
        displayFile(files[0]);
    }
});

function displayFile(file) {
    document.getElementById("file-info").hidden = false;

    document.getElementById("file-name").textContent =
        "Name: " + file.name;

    document.getElementById("file-type").textContent =
        "Type: " + (file.type || "Unknown");

    document.getElementById("file-size").textContent =
        "Size: " + (file.size / 1024).toFixed(2) + " KB";

    document.getElementById("scan-button").hidden = false;

    selectedFile = file;
}


const scanButton = document.getElementById("scan-button");

scanButton.addEventListener("click", async () => {
    if (!selectedFile) {
        return;
    }

    scanButton.disabled = true;
    scanButton.textContent = "Scanning...";

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
        const response = await fetch("/scan", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        document.getElementById("scan-result").hidden = false;

        if (!response.ok) {
            throw new Error(result.error || "Scanning failed.");
        }

        document.getElementById("scan-status").textContent =
            result.status;

        document.getElementById("scan-hash").textContent =
            "SHA-256: " + result.sha256;

    } catch (error) {
        document.getElementById("scan-result").hidden = false;

        document.getElementById("scan-status").textContent =
            "Error: " + error.message;

        document.getElementById("scan-hash").textContent = "";

    } finally {
        scanButton.disabled = false;
        scanButton.textContent = "Scan File";
    }
});
