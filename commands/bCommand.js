function spaceLeftCommand(finalContent){
    let contentArr=finalContent.split('\n');
    finalContent="";
    let counter=1;
    for(let i=0;i<contentArr.length;++i)
    {
        if(contentArr[i]=="")
            finalContent+="\n";
        else
        {
            finalContent+=counter+". "+contentArr[i]+"\n";
            counter++;
        }
    }
    return finalContent;
}

module.exports={
    spaceLeftCommand:spaceLeftCommand
}