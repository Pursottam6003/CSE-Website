mybody= document.getElementById('demo');
myauthor=document.getElementById('author');
let quote='';
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


//  $.get('https://api.quotable.io./authors?slug=albert-einstein|abraham-lincoln|steve-jobs|swami-vivekananda|mother-teresa|helen-keller',function (response)
