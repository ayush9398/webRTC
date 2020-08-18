const socket = io('/')
const videoGrid = document.getElementById('video-grid')
const peer = new Peer(undefined, {
    port: '3001',
    path: '/',
    proxied: true
});

const myvideo = document.createElement('video');
myvideo.muted = true

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    addVideoStream(myvideo, stream)

    peer.on('call', call => {
        call.answer(stream);
        video = document.createElement('video');
        call.on('stream', userVideoStream => {
            addVideoStream(video, userVideoStream);
        })
    })

    socket.on('user-connected', userId => {
        connectMyPeer(userId, stream);
    })
})

peer.on('open', id => {
    socket.emit('join-room', room_id, id);
})


socket.on('user-connected', userId => {
    console.log("user connected: "+ userId);
})

function addVideoStream(video, stream){
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoGrid.append(video)
}

function connectMyPeer(userId, stream){
    call = peer.call(userId, stream);
    video = document.createElement('video');
    call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream)
    })

    call.on('close', ()=>{
        video.remove();
    })
}