let joke = document.getElementById("joke");
        let next = document.getElementById("next");

        const getJoke = () => {
            let setHeader = {
                headers: {
                    Accept: "application/json"
                }
            }

            fetch("https://icanhazdadjoke.com", setHeader)
                .then((res) => res.json())
                .then((data) => {
                    joke.innerHTML = '"" '+ data.joke +  ' ""';
                })
                .catch((error) => console.log(error));
        }

        next.addEventListener("click", getJoke);
        getJoke();