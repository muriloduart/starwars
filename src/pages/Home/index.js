import { Container, MovieList, Movies } from "./styles";
import api from "../../services/api";
import { useEffect, useState } from "react";


function Home() {

    let [teste, teste1] = useState([])

    useEffect(() => {
        console.log("chamou useEffect")
        api.get("people").then((data) => {
            console.log(data);
                window.bucks = data;

             //eslint-disable-next-line react-hooks/exhaustive-deps
              data.results.map(function (item) {

              teste.push( {
                     id: item.episode_id,
                     tittle: item.tittle,
                     img_url: 'https://i.pinimg.com/originals/f2/1d/92/f21d9251342c99d4c7b50e93d8700f66.jpg',
                 });

             });
        })
        console.log("Murilo")
    }, [])

    console.log(teste);

    const movies = [
        {
            id: 1,
            tittle: 'A New Hope',
            img_url: 'https://i.pinimg.com/originals/f2/1d/92/f21d9251342c99d4c7b50e93d8700f66.jpg',
        },


        {
            id: 2,
            tittle: 'The Empire Strikes Back',
            img_url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/363/165/products/imperio-contra-ataca-edicao-especial1-ee2f9f36cfab7e27c216511100660212-1024-1024.jpg',
        },


        {
            id: 3,
            tittle: 'Return of the Jedi',
            img_url: 'https://i.pinimg.com/564x/ff/be/00/ffbe00fd890d76cf2eb7224e58262be3.jpg',
        },


        {
            id: 4,
            tittle: 'The Phantom Menace',
            img_url: 'https://1.bp.blogspot.com/-jhi4yGVcUko/WHYpuQOxQBI/AAAAAAAAbec/UwUJNEyzxusyi7UfLk5wulGT_aDOf8regCLcB/s1600/Star_Wars_Episode_I_The_Phantom_Menace_movie_poster.jpg',
        },


        {
            id: 5,
            tittle: 'Attack of the Clones',
            img_url: 'https://cdna.artstation.com/p/assets/images/images/028/452/832/large/visyrion-art-attack-of-the-clone.jpg?1594526557',
        },


        {
            id: 6,
            tittle: 'Revenge of the Sith',
            img_url: 'https://i.pinimg.com/564x/5e/5b/49/5e5b4988443f22e76d2fc68cb0a86639.jpg',
        }

    ]


    return (
        <Container>
            <h1>Films</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movies key={movie.id}>
                            <a href="https://google.com"> <img src={movie.img_url} alt="filme 1" /> </a>
                            <span>{movie.tittle}</span>
                        </Movies>

                    )
                })}


                <h2>TESTE TESTE</h2>

            </MovieList>
        </Container>
    )
}

export default Home;