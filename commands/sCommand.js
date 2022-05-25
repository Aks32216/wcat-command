function removeSpace(finalContent)
{
    let contentArr=finalContent.split('\n');
    finalContent=contentArr[0];
    for(let i=1;i<contentArr.length;++i)
    {
        if(contentArr[i]=="" && contentArr[i-1]=="")
            continue;
        if(finalContent=="")
            finalContent+=contentArr[i];
        else
            finalContent+="\n"+contentArr[i];
    }
    return finalContent;
}

module.exports={
    removeSpace:removeSpace
}