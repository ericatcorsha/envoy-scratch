export function recv(data) {
    console.log('recv ' + JSON.stringify(data.toString()));
}

export function send(data) {
    console.log('send ' + JSON.stringify(data.toString()));
}
