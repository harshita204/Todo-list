let input=prompt('what would you like to do?');
const todos=['eat','sleep','code','dance'];
while(input!=='quit' && input!=='q')
{
    if(input==='list')
    {
        console.log('************');
        for(int i=0;i<todos.length;i++)
            console.log(`${i}:${todos[i]}`);
        console.log('************');
    }
    else if(input==='new')
    {
        const newtodo=prompt('OK,what is the new todo?');
        todos.push(newtodo);
        console.log(`${newtodo} added to the list!`);
    }
    else if(input==='delete')
    {
        const index=parseInt(prompt('OK,Enter the index to be deleted'));
        if(!Number.isNaN(index))
        {
            const deleted=todos.splice(index,1);
            console.log(`Ok,deletec ${deleted[0]}`);
        }
        else
        {
            console.log('Unknown Index');
        }
    }
    input=prompt('what would you like to do?');
}
console.log('Ok,Quit the app');
