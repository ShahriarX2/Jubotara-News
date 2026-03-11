/**
 * Client-side helper to upload a file to Cloudinary via a server-side API route.
 * @param {File} file - The file object from an input element.
 * @returns {Promise<string|null>} - The secure URL of the uploaded image.
 */
export const uploadToCloudinary = async (file) => {
  if (!file) return null;

  try {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Upload failed");
    }

    const data = await res.json();
    return data.secure_url;
  } catch (error) {
    console.error("Client upload error:", error);
    return null;
  }
};
