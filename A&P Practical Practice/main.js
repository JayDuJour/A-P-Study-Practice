//Changes Displayed Image and Labels
function activeScene(button, tags,  images, index) {
    //Image Change
    displayImg.src = images[index];

    //Label Change
    for (i = 0; i < label.length; i++) {

        if (label[i].classList.contains(tags[index])) {
            label[i].classList.add('show');
            label[i].classList.remove('hide')
        } else {
            label[i].classList.remove('show')
            label[i].classList.add('hide')
        }
    }
    //Active Button
    for (i = 0; i < images.length; i++) {
        button[i].classList.remove('active');
    }
    button[index].classList.add('active');
}
