const imagePreview = document.querySelector(".preview-image");
const buttonFile = document.querySelector(".file-select")

buttonFile.addEventListener("change", function(e){
    const archivos = buttonFile.files;
    if(!archivos.length ||archivos.length == 0 || archivos == null){
        imagePreview.src = "";
        return;
    }
    const firstFile = archivos[0];
    
      // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(firstFile);

    imagePreview.src = objectURL;
})
