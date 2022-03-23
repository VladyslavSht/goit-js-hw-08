export function handleOpenModal(event) {
        event.preventDefault();
        if (event.target.nodeName !== "IMG") {
        return
        };
        
    galleryModal.on('close.simplelightbox', function () {
    galleryModal.close();
    });
    };

 