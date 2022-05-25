function lineNumberCommand(finalContent)
{
    let contentArr=finalContent.split('\n');
    finalContent="";
    for(let i=0;i<contentArr.length;++i)
    {
        let content=contentArr[i];
        content=i+1+". "+content+"\n";
        finalContent+=content;
    }
    return finalContent;
}

module.exports={
    lineNumberCommand:lineNumberCommand
}