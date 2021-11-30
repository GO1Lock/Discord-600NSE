module.exports = {
    name: 'help',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send('Commands available\r\n'
        + ' (  !crack  )\r\n '
        + '(  !photo  + >> photo you want << )\r\n '
        + '(  !help   )\r\n '
        + '(  !play + >> music you want to play <<   )\r\n '
        + '(  !stop   )\r\n '
        + '(  !test   )\r\n '
        + '(  !clear + >> number of lines to be deleted << )');

    }
}