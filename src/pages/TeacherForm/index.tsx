import React, { useState } from 'react'
import Header from '../../components/Header';
import './styles.css';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleitem() {
        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ])

    }
    return (
        <div id="page-teacher-form" className="container">
            <Header title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus Dados</legend>

                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                    <Textarea name="bio" label="Biografia" />

                </fieldset>
                <fieldset>
                    <legend>Seus a Aula</legend>

                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Ates' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Lingua portuguêsa', label: 'Lingua portuguêsa' },
                            { value: 'História', label: 'História' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Ensino Religioso', label: 'Ensino Religioso' },
                            { value: 'Filosofia', label: 'Filosofia' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Química', label: 'Química' },
                        ]}
                    />

                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>
                <fieldset>
                    <legend>
                        Horários Disponivéis
                        <button type="button" onClick={addNewScheduleitem}>
                            + Novo Horário
                        </button>
                    </legend>

                    {scheduleItems.map(scheduleItems => {
                            return (
                                <div key={scheduleItems.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da Semana"
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-Feira' },
                                            { value: '2', label: 'Terça-Feira' },
                                            { value: '3', label: 'Quarta-Feira' },
                                            { value: '4', label: 'Quinta-Feira' },
                                            { value: '5', label: 'Sexta-Feira' },
                                            { value: '6', label: 'Sábado' },

                                        ]}
                                    />

                                    <Input name="from" label="Das" type="time" />
                                    <Input name="to" label="Até" type="time" />

                                </div>
                            )
                        })
                    }

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante!
                        <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>

            </main>
        </div>
    )
}

export default TeacherForm;