import React from 'react'
import Header from '../../components/Header'
import './styles.css'
import TeacherItem from '../../components/TeacherItem'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <Header title="Estes são os proffys disponívéis.">
                <form id="search-teachers">

                    <div className="input-block">
                        <label htmlFor="subject"> Matéria </label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day"> Dia da Semana </label>
                        <input type="text" id="weel_day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time"> Hora </label>
                        <input type="text" id="time" />
                    </div>

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