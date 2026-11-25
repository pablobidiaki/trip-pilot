export async function uploadImage(file: File): Promise<string> {
    const formData = new FormData();
    
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
        console.error("Erro do Cloudinary:", data);

        throw new Error(data.error?.message ?? "Falha ao enviar a imagem.");
    }

    return data.secure_url;
}