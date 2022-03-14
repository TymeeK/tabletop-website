import React from 'react';
import {
    NavLink,
    NavContainer,
    ContentContainer,
    DiceImage,
    ElementDiv,
    PurchaseButton,
} from '../Styling/Homepage.Style';
function Homepage() {
    return (
        <>
            <NavContainer>
                <h1>Dungeons and Dragons</h1>
                <ul>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/signup'>Signup</NavLink>
                </ul>
            </NavContainer>
            <ContentContainer>
                {/* I want an image here showing the dnd handbook*/}
                {/* I want to have some text showing off that it's dnd */}
                <ElementDiv>
                    <h1>Welcome to our Dungeons and Dragons website!</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicingS
                        elit. Delectus dolor numquam eos provident porro
                        pariatur veritatis laboriosam quam, a quisquam
                        reiciendis omnis iusto dolorum error enim culpa modi
                        molestiae incidunt.
                    </p>
                    <form
                        action='https://www.amazon.com/Players-Handbook-Dungeons-Dragons-Wizards/dp/0786965606
                    
                    '
                        target='_blank'
                    >
                        <PurchaseButton>Purchase the handbook!</PurchaseButton>
                    </form>
                </ElementDiv>
                <ElementDiv>
                    <DiceImage src={require('../Images/dice.jpg')} alt='Dice' />
                </ElementDiv>
            </ContentContainer>
        </>
    );
}

export default Homepage;
