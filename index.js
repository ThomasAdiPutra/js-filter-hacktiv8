const videoData = require('./homework');

const newVideoData = videoData.filter((video) => {
    return video.present;
});

console.log(newVideoData, `length: ${newVideoData.length}`);
