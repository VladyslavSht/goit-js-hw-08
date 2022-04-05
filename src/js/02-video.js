import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


const savedTime = localStorage.getItem("videoplayer-current-time");
const parsedTime = JSON.parse(savedTime);

player.on('timeupdate', throttle(handleTimeUpdate, 1000));

function handleTimeUpdate(currentTime) {

    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime.seconds));
}

player.setCurrentTime(parsedTime).then(function(seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
           
            break;

        default:
            
            break;
    }
});

