export function handleOpenModal(event) {
        event.preventDefault();
        if (event.target.nodeName !== "IMG") {
        return
        };
        let galleryModal = new SimpleLightbox('.gallery a',
        {
            captions: true,
            captionsData: 'alt',
            captionDelay: 250,
    });
        
    galleryModal.on('close.simplelightbox', function () {
    galleryModal.close();
    });
    };

 