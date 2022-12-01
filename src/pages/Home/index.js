import { Container } from "./styles";


function Home(){
return(
    <Container>
            <h1>Films</h1>
            <ul>
                <li>
                    <a href="https://google.com"> <img  src="https://i.pinimg.com/originals/f2/1d/92/f21d9251342c99d4c7b50e93d8700f66.jpg" alt="filme 1"/> </a>
                    <span>A New Hope</span>
                </li>
                <li>
                <a href="https://google.com"> <img  src="https://d3ugyf2ht6aenh.cloudfront.net/stores/363/165/products/imperio-contra-ataca-edicao-especial1-ee2f9f36cfab7e27c216511100660212-1024-1024.jpg" alt="filme 1"/> </a>
                    <span>The Empire Strikes Back</span>
                </li>
                <li>
                <a href="https://google.com"> <img  src="https://i.pinimg.com/564x/ff/be/00/ffbe00fd890d76cf2eb7224e58262be3.jpg" alt="filme 1"/> </a>
                    <span>Return of the Jedi</span>
                </li>
                <li>
                <a href="https://google.com"> <img  src="https://1.bp.blogspot.com/-jhi4yGVcUko/WHYpuQOxQBI/AAAAAAAAbec/UwUJNEyzxusyi7UfLk5wulGT_aDOf8regCLcB/s1600/Star_Wars_Episode_I_The_Phantom_Menace_movie_poster.jpg" alt="filme 1"/> </a>
                    <span>The Phantom Menace</span>
                </li>
                <li>
                <a href="https://google.com"> <img  src="https://cdna.artstation.com/p/assets/images/images/028/452/832/large/visyrion-art-attack-of-the-clone.jpg?1594526557" alt="filme 1"/> </a>
                    <span>Attack of the Clones</span>
                </li>
                <li>
                <a href="https://google.com"> <img  src="https://i.pinimg.com/564x/5e/5b/49/5e5b4988443f22e76d2fc68cb0a86639.jpg" alt="filme 1"/> </a>
                    <span>Revenge of the Sith</span>
                </li>
            </ul>
        </Container>
)
}

export default Home;