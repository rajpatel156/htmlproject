
    const container = document.querySelector('#container');

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    const request = new XMLHttpRequest();
    request.open('GET', 'https://restcountries.com/v3.1/all');
    request.send();
    request.addEventListener('load', function () {
        const data = JSON.parse(this.responseText);
        const info = document.querySelector('#info');

        info.addEventListener('click', () => {
            const conname = document.querySelector('#countryname').value;
            
            let fin = "India";
            if (conname != "") {
                fin = capitalizeFirstLetter(conname);
            }

           
            
            for (ele of data) {
                    console.log(ele)
                if (ele.name.common == fin) {
                      

                    
                    const content = `
                        <div class="card" style="width: 18rem;">
                        <img src="${ele.flags.png}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${ele.name.common}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Capital : ${ele.capital}</li>
                            <li class="list-group-item">Continent : ${ele.region}</li>
                            <li class="list-group-item"> Population : ${ele.population}</li>
                            <li class="list-group-item"> </li>
                        </ul>
                        <button type="button" class="btn btn-outline-primary" id="getweath">Get Weather</button>
                        </div>
                        `;
                    container.innerHTML = content;
                    console.log('done');
                    const getweath = document.querySelector('#getweath');
                    getweath.addEventListener('click', () => {
                        const container2 = document.querySelector('#container2');
                        const container3 = document.querySelector('#container3');
                        console.log(ele.capital);
                        const bet = async () => {
                            try {

                                const res1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ele.capital},${ele.alpha2Code}&units=metric&appid=790293155362a9a0bf69eb4c46c50143`)
                                const data1 = await res1.json()
                                console.log(data1);
                                const content2 = `
                                            <div class="card" style = "width: 18rem;">
                                                <div class="card-body">
                                                    <h5 class="card-title">${ele.capital}</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted">Temperature</h6>
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item"> </li>
                                                        <li class="list-group-item">Max-Temperature : ${data1.main.temp_max} C</li>
                                                        <li class="list-group-item">Min-Temperature : ${data1.main.temp_max} C</li>   
                                                        <li class="list-group-item">Feels Like : ${data1.main.feels_like} C</li>                                                    
                                                        <li class="list-group-item"> </li>
                                                    </ul>
                                                   
                                                </div>
                                            </div>
                                            `;
                                
                                            const content3 = `
                                            <div class="card" style = "width: 18rem;">
                                                <div class="card-body">
                                                    <h5 class="card-title">${ele.capital}</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted">Weather</h6>
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item"> </li>
                                                        <li class="list-group-item">Weather : ${data1.weather[0].main}</li>  
                                                        <li class="list-group-item">Pressure : ${data1.main.pressure} mmHg</li>                                                        
                                                        <li class="list-group-item">Humidity : ${data1.main.humidity} %</li> 
                                                        <li class="list-group-item"> </li>
                                                    </ul>
                                                   
                                                </div>
                                            </div>
                                            `;
                                                                           
                                container2.innerHTML = content2;
                                container3.innerHTML = content3;

                            } catch (e) {
                                console.log(e);
                            }

                        }
                        bet();
                    });
                    //container.insertAdjacentHTML("afterbegin",content);                 

                    break;
                }

            }

        });


    });
