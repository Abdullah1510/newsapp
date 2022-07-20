// fc3540da19374357a2328f4eb09f15ee



let source = 'bbc-news';
let apiKey = 'fc3540da19374357a2328f4eb09f15ee'


let newsAccordion = document.getElementById('newsAccordion');

const xtml = new XMLHttpRequest();
xtml.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);


xtml.onload = function () {
    if (this.status == 200 && this.readyState == 4) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;


        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index + 1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
     newsAccordion.innerHTML+=news;
                    
        });

    }
    else {
        console.log("Some error occured")
    }
}

xtml.send()



