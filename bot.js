const Eris = require("eris");
var kboosh = new Eris("NDY5MTIyNjUwNjc4MjMxMDQw.DjDIIg.TdrLrqQM32iwEn3Ne-j89V_I5a0");
var kboosh_id = "469113659277180958";
                    var i = "0";
                    var x = "0";
kboosh.on("voiceChannelJoin", (msg) => {
    x++;
    kboosh.editChannel(kboosh_id, { name : "Voice ⇏「" + x + "」"});
});
kboosh.on("voiceChannelLeave", (msg) => {
    x--;
    kboosh.editChannel(kboosh_id, { name : "Voice ⇏「" + x + "」"});
});

kboosh.on("messageCreate", (msg) => {
    if(msg.author.id !== "244284202797760522") return kboosh.createMessage('__**This Command is only for the bot Owner**__');
    if(msg.content === "^voice") {
        let users = msg.channel.guild.members.map(m => m.user.id);
        let messages = [];
        messages.push(users);
        setTimeout(function(){
        while (i <= messages[0].length - 1) {
            check = msg.channel.guild.members.get(messages[0][i]);
        if(!check.voiceState.channelID){
                i++;
        }else{
                x++;
                i++;
        }
}
    console.log(x);
    kboosh.createMessage(msg.channel.id, "Voice Online Members Now Are: **"+x+"** Members!");
    kboosh.editChannel(kboosh_id, { name : "Voice ⇏「"+x+"」"});
    messages = [];
}, 1);
    }
});


  

kboosh.connect("NDY5MTIyNjUwNjc4MjMxMDQw.DjDIIg.TdrLrqQM32iwEn3Ne-j89V_I5a0")
