import React from 'react'
import Header from '../../components/Header'
import './styles.css'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

function TeacherList() {

    return (
        <div id="page-teacher-list" className="container">
            <Header title="Estes são os proffys disponívéis.">
                <form id="search-teachers">
                    <Select 
                        name="subject" 
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Ates'},
                            { value: 'Matemática', label: 'Matemática'},
                            { value: 'Lingua portuguêsa', label: 'Lingua portuguêsa'},
                            { value: 'História', label: 'História'},
                            { value: 'Ciências', label: 'Ciências'},
                            { value: 'Biologia', label: 'Biologia'},
                            { value: 'Educação Física', label: 'Educação Física'},
                            { value: 'Ensino Religioso', label: 'Ensino Religioso'},
                            { value: 'Filosofia', label: 'Filosofia'},
                            { value: 'Geografia', label: 'Geografia'},
                            { value: 'Química', label: 'Química'},
                        ]}
                    />

                    <Select 
                        name="week_day" 
                        label="Dia da Semana"
                        options={[
                            { value: '0', label: 'Domingo'},
                            { value: '1', label: 'Segunda-Feira'},
                            { value: '2', label: 'Terça-Feira'},
                            { value: '3', label: 'Quarta-Feira'},
                            { value: '4', label: 'Quinta-Feira'},
                            { value: '5', label: 'Sexta-Feira'},
                            { value: '6', label: 'Sábado'},
                           
                        ]}
                    />
                    <Input type="time" name="time" label="Hora"/>

                </form>
            </Header>

            <main>
             <TeacherItem/>
             <TeacherItem/>
             <TeacherItem/>
            </main>
            
        </div>
    )
}

export default TeacherList;