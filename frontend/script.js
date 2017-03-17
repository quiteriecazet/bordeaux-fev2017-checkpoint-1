const API_URL = 'http://localhost:3000/articles';


document.getElementsByTagName < "form" > addEventListener('click', function () {


    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function (result) {

        xhr.open('GET', API_URL);

        xhr.addEventListener('load', function () {

            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status >= 200 && req.status < 400) {
                    console.log(xhr.responseText);

                } else {
                    console.log("Error in network request: " + request.statusText);
                }

                xhr.send(null);
    
        )};





    var xhr = new XMLHttpRequest();

    if (xhr) {

        xhr.open('POST', 'http://localhost:3000/articles');
        xhr.setRequestHeader('Content-Type',
            'application/json; charset=utf-8');

        var jsonStr = JSON.stringify({
            [
            {
                "id": 1,
                "author": "Perceval",
                "chapter": "Livre I",
                "episode": "Ambidextrie",
                "content": "Faut arrêter ces conneries de nord et de sud ! Une fois pour toutes, le nord, suivant comment on est tourné, ça change tout !",
                "date": "",
                "image": "/img/livre-1-ambidextrie.jpg"
            },
            {
                "id": 2,
                "author": "Karadoc",
                "chapter": "Livre II",
                "episode": "La Cassette",
                "content": "La politique de l'autruche, c'est une politique qui court vite, une politique qui fait des gros œufs, c'est tout.",
                "date": "",
                "image": "/img/livre-2-la-cassette.png"
            },
            {
                "id": 3,
                "author": "Perceval",
                "chapter": "Livre IV",
                "episode": "Les Chaperons",
                "content": "En plus, je connais une technique pour tuer trois hommes en un coup rien qu’avec des feuilles mortes ! Alors là, vous êtes deux, vous avez bien de la chance.",
                "date": "",
                "image": "/img/livre-4-les-chaperons.jpg"
            },
            {
                "id": 4,
                "author": "Karadoc",
                "chapter": "Livre II",
                "episode": "Sept cent quarante-quatre",
                "content": "Par exemple, vous prenez aujourd’hui. Vous comptez sept jours. Ça vous emmène dans une semaine. Et bien on sera exactement le même jour qu’aujourd’hui… À une vache près, hein… C’est pas une science exacte.",
                "date": "",
                "image": "/img/livre-2-sept-cent-quarante-quatre.jpg"
            }
            ]
    
    
    })


        xhr.send(jsonStr);

    }