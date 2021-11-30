const Discord = require('discord.js');

//Declere the Client
const client = new Discord.Client();
const { Intents } = require('discord.js');

//Prefix to call the bot
const prefix ='!';

// !!! Do not know !!!
const fs = require('fs');
client.command = new Discord.Collection();

//Get files from Commands folder and filter
const commandFiles = fs.readdirSync('./Command/').filter(file => file.endsWith('.js'));

//Looping to find the folder in Command
for(const file of commandFiles){
    const command = require(`./Command/${file}`);
    client.command.set(command.name, command);
}

//Checking if the bot is online
client.once('ready', () => {
    console.log('Argon is online');

});

//Read the bot user message
client.on('message', message =>{

    //Checking the user input if it has the prefix that bot requires 
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //Will be used to take two input at once 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Just a little check to see until where is working
    //message.channel.send('If you want to use the bot please use >>( - )<<');

    //Checkign if the user input matches with the command that the user takes
    if(command === 'test'){

        //Going to the command folder to take the output of the file in the command of TEST
        client.command.get('test').execute(message, args);

    }

    else if(command === 'crack'){
        client.command.get('crack').execute(message, args)
    }

    else if(command === 'p'){
        client.command.get('p').execute(client, message, args)
    }

    else if(command === 's'){
        client.command.get('s').execute(message, args)
    }

    else if(command === 'photo'){
        client.command.get('photo').execute(client, message, args)
    }

    else if(command === 'help'){
        client.command.get('help').execute(message, args)
    }

    else if(command === 'clear'){
        client.command.get('clear').execute(message, args)
    }


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


        
   
})

//Client login password 
client.login('ODc0OTc1MTcxNzA5MTMyODEy.YROyIQ.Mx-ZwVeahj6c0h80Xdfb_oWT7Es');
