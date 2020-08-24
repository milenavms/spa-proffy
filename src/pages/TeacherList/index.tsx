import React, { useState, FormEvent } from 'react'
import Header from '../../components/Header'
import './styles.css'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'

function TeacherList() {

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    
    async function searchTeacher(e: FormEvent){
        e.preventDefault();

       const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time,
            }
        });

        console.log(response.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <Header title="Estes são os proffys disponívéis.">
                <form id="search-teachers" onSubmit={searchTeacher}>
                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={ e => { setSubject(e.target.value)}}
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
                        value={week_day}
                        onChange={ e => { setWeekDay(e.target.value)}}
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
                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora"
                        value={time}
                        onChange={ e => { setTime(e.target.value)}}
                    />

                    <button type="submit">
                        Buscar
                    </button>

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