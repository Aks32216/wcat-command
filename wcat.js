const fs=require("fs");
const path=require("path");
const spaceCommand=require("./commands/sCommand");
const lineNumWithSpace=require("./commands/nCommand")
const lineNumWithoutSpace=require("./commands/bCommand")

let fileArr=process.argv.slice(2);
let finalContent="";
let isWrite=false;
let isAppend=false;
let isSCommand=false;
let isNCommand=false;
let isBCommand=false;

for(let i=0;i<fileArr.length;++i)
{
    if(fileArr[i]==">")
    {
        isWrite=true;
        break;
    }
    else if(fileArr[i]==">>")
    {
        isAppend=true;
        break;
    }
    else if(fileArr[i]=="-s")
    {
        isSCommand=true;
    }
    else if(fileArr[i]=="-n")
    {
        isNCommand=true;
    }
    else if(fileArr[i]=="-b")
    {
        isBCommand=true;
    }
    else if(fs.lstatSync(fileArr[i]).isFile())
    {
        let content=fs.readFileSync(fileArr[i],"utf-8");
        if(finalContent=="")
            finalContent+=content;
        else
            finalContent+="\n"+content;
    }    
    else{
        throw new Error("enter a valid sequence of command"); 
    }
    
}

// error if -b and -n command is used simultaneously
if(isBCommand && isNCommand)
{
    throw new Error("-b and -n command cannot be used together"); 
}

// -s command to remove space
if(isSCommand)
{
    finalContent=spaceCommand.removeSpace(finalContent);
}

// -n command to give line number
if(isNCommand)
{
    finalContent=lineNumWithSpace.lineNumberCommand(finalContent);
}

// -b comamnd to give line number to only content full lines
if(isBCommand)
{
    finalContent=lineNumWithoutSpace.spaceLeftCommand(finalContent);
}

// > operator to put content in other file
if(isWrite)
{
    let fileName=path.join(process.cwd(),fileArr[fileArr.length-1]);
    fs.writeFileSync(fileName,finalContent);
    console.log("Created file Sucessfully");
    process.exit();
}

// >> operator to append content in the file
if(isAppend){
    let fileName=path.join(process.cwd(),fileArr[fileArr.length-1]);
    fs.appendFileSync(fileName,finalContent);
    console.log("Content appended to file Sucessfully");
    process.exit();
}

console.log(finalContent);