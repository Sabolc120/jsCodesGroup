let beolvas = async () =>{
    try{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await data.json();
        return result
    }
    catch(error){
        console.log(error.message);
    }
}

let osszerak = async () =>{
    try{
        let result = await beolvas();
        let tartalom = document.getElementById('tartalom')
        for(let i = 0; i < 9; i++){
            //ID Helyének létrehozása
           let idElement = document.createElement('h1')
           let id = result[i].id;
           let idNode = document.createTextNode(id)
           idElement.appendChild(idNode);

           //userId helye létrehozása
           let userIdElement = document.createElement('h2')
           let userId = result[i].userId;
           let userIdNode = document.createTextNode(userId)
           userIdElement.appendChild(userIdNode)

           //Ide jöjjön a szöveg
           let szovegElement = document.createElement('div')
           let szoveg = result[i].body;
           let szovegNode = document.createTextNode(szoveg)
           szovegElement.appendChild(szovegNode)

           //Most rakjuk össze ezeket
           let kontener = document.createElement('div')
           kontener.setAttribute('class','container')
           kontener.appendChild(idElement)
           kontener.appendChild(userIdElement)
           kontener.appendChild(szovegElement)

           tartalom.appendChild(kontener)
        }
    }
    catch(error){
        console.log(error.message);
    }
}
osszerak();