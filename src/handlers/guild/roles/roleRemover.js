function roleRemover(clientObject,messageObject,message){
    // !bot remove_role <@user> <role>
    let executorsRole = 'ADMINISTRATOR'; // Required role to execute this command.
    let targetRole = message.slice(3).join(" ");
    if(messageObject.member.hasPermission(executorsRole)){
        let role = messageObject.guild.roles.cache.find(role => role.name == targetRole);
        let member = messageObject.mentions.members.first();
        if(role && member){
            let role_id = role.id;
            member.roles.remove(role_id)
            .then(()=>{
                messageObject.react("✅");
            })
            .catch((error)=>{
                console.error(error);
                messageObject.react("❌");
            });
        }
        else{
            messageObject.react("❌");
        }
    }
    else{
        messageObject.channel.send(`This member (${messageObject.member}) can't execute this command.`);
    }
}
module.exports = {roleRemover:roleRemover}