let menu = document.getElementById('btn');
let side= document.querySelector('.sidebar')
let navList=document.querySelector('.nav_list')
let Main_name= document.getElementById('logoName');

let searchBar=document.getElementById('search'); 

let aboutUser= document.getElementById('info');
let spanItem0 =document.getElementsByTagName("span")[0];
let spanItem1 =document.getElementsByTagName("span")[1];
let spanItem2 =document.getElementsByTagName("span")[2];
let spanItem3 =document.getElementsByTagName("span")[3];
let spanItem4 =document.getElementsByTagName("span")[4];
let spanItem5 =document.getElementsByTagName("span")[5];
let spanItem6 =document.getElementsByTagName("span")[6];


mybody= document.getElementById('quotes');
myauthor=document.getElementById('author');
let quote='';

let check=0; 

function checkOnLoad()
{
    $.get('https://api.quotable.io/random?tags=technology,famous-quotes',function(response){
        quote =response['content'];
        let author = `-${response['author']}`;
        console.log(author);
        mybody.innerHTML=quote;
        myauthor.innerHTML=author;
        console.log('hey');
    });

}

menu.addEventListener('click',function(e){
    if(check==0)
    {   
        side.style.width="40px";
        side.style.transition="0.3s";
        spanItem0.style.display='none';
        spanItem1.style.display='none';
        spanItem2.style.display='none';
        spanItem3.style.display='none';
        spanItem4.style.display='none';
        spanItem5.style.display='none';
        spanItem6.style.display='none';
        Main_name.style.display='none';
        side.style.alginItems='center';
        aboutUser.style.display='none';
        searchBar.style.display='none';
 
        console.log('hello');
        check=1;
    }

    else 
    {
        side.style.width="15rem";
        spanItem0.style.display='block';
        spanItem1.style.display='block';
        spanItem2.style.display='block';
        spanItem3.style.display='block';
        spanItem4.style.display='block';
        spanItem5.style.display='block';
        spanItem6.style.display='block';
        Main_name.style.display='block';
        side.style.alginItems='block';
        aboutUser.style.display='block';
        searchBar.style.display='block';
        check=0;
    }
   
});