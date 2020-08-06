import React from 'react';
import './styles.css';
import whatsappIcon from  '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/47642347?s=460&u=c9e1327f95cc1add7318b028f597022beea4bc53&v=4" alt="img" />
                <div>
                    <strong>Milena Vasconcelos</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada
                <br/>
                <br/>
                Apaixonado por explodir coisas me laboratórios e por mudar a vida das pessoas através de experiências
            </p>

            <footer>
                <p>
                    Preço/hora: 
                    <strong> R$ 90,00</strong>
                </p>
                <button type="button">
                <img src={whatsappIcon} alt="whats"/>
                    Entrar em contato
                </button>
               
            </footer>

        </article>
    )
}

export default TeacherItem;