import React from 'react'
import Header from '../../components/Header'
import './styles.css'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <Header title="Estes são os proffys disponívéis.">
                <form id="search-teachers">

                    <Input name="subject" label="Matéria"/>
                    <Input name="week_day" label="Dia da Semana "/>
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