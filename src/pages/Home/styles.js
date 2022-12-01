import styled from 'styled-components'

export const Container = styled.div`

h1 {
    text-align: center;
    margin: 4rem 0;

}





`

export const MovieList = styled.ul`


    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 5rem;








`

export const Movies = styled.li`

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
        transition: 3.9s;
        
        
    }
    
    span {
        font-weight: bold;
        font-size: 1.2rem;
        
    }
    
    a {
        transition: all 1s ease-out;
    }
    
    a:hover {
        transform: scale(1.3);   
        


`