
class EventManager {
    constructor() {
        this.urlBase = "/events"
        this.obtenerDataInicial()
        this.inicializarFormulario()
        this.guardarEvento()
        this.cerrarSession()
    }

    obtenerDataInicial() {
        let url = this.urlBase + "/all"
        $.get(url, (response) => {
            if(response!="session"){
                this.inicializarCalendario(response)
            }else{
                alert("Debe iniciar session")
                window.location.href = "http://localhost:3000/index.html"
            }
        })
    }

    eliminarEvento(evento) {
        let eventId = evento.id
        $.post('/events/delete/'+eventId, {id: eventId}, (response) => {
            if(response!="session"){
                alert(response)
            }else{
                alert("Debe iniciar session")
                window.location.href = "http://localhost:3000/index.html"
            }
        })
        $('.delete').find('img').attr('src', "./img/delete.png");
        $('.delete').css('background-color', '#8B0913')
    }

    guardarEvento() {
        $('.addButton').on('click', (ev) => {
            ev.preventDefault()
            let nombre = $('#titulo').val(),
            start = $('#start_date').val(),
            title = $('#titulo').val(),
            end = '',
            start_hour = '',
            end_hour = '';

            if (!$('#allDay').is(':checked')) {
                end = $('#end_date').val()
                start_hour = $('#start_hour').val()
                end_hour = $('#end_hour').val()
                start = start + 'T' + start_hour
                end = end + 'T' + end_hour
            }
            let url = this.urlBase + "/new"
            if (title != "" && start != "") {
                let ev = {
                    title: title,
                    start: start,
                    end: end
                }
                $.post(url, ev, (response) => {
                    if(response!="session"){
                        alert("Registro guardado");
                        $('.calendario').fullCalendar('renderEvent', response)
                    }else{
                        alert("Debe iniciar session")
                        window.location.href = "http://localhost:3000/index.html"
                    }
                })
                
            } else {
                alert("Complete los campos obligatorios para el evento")
            }
        })
    }

    inicializarFormulario() {
        $('#start_date, #titulo, #end_date').val('');
        $('#start_date, #end_date').datepicker({
            dateFormat: "yy-mm-dd"
        });
        $('.timepicker').timepicker({
            timeFormat: 'HH:mm:ss',
            interval: 30,
            minTime: '5',
            maxTime: '23:59:59',
            defaultTime: '',
            startTime: '5:00',
            dynamic: false,
            dropdown: true,
            scrollbar: true
        });
        $('#allDay').on('change', function(){
            if (this.checked) {
                $('.timepicker, #end_date').attr("disabled", "disabled")
            }else {
                $('.timepicker, #end_date').removeAttr("disabled")
            }
        })
    }

    inicializarCalendario(eventos) {
        $('.calendario').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,basicDay'
            },
            defaultDate: '2019-04-01',
            navLinks: true,
            editable: true,
            eventLimit: true,
            droppable: true,
            dragRevertDuration: 0,
            timeFormat: 'H:mm',
            eventDrop: (event) => {
                this.actualizarEvento(event)
            },
            events: eventos,
            eventDragStart: (event,jsEvent) => {
                $('.delete').find('img').attr('src', "./img/trash-open.png");
                $('.delete').css('background-color', '#a70f19')
            },
            eventDragStop: (event,jsEvent) => {
                var trashEl = $('.delete');
                var ofs = trashEl.offset();
                var x1 = ofs.left;
                var x2 = ofs.left + trashEl.outerWidth(true);
                var y1 = ofs.top;
                var y2 = ofs.top + trashEl.outerHeight(true);
                if (jsEvent.pageX >= x1 && jsEvent.pageX<= x2 &&
                    jsEvent.pageY >= y1 && jsEvent.pageY <= y2) {
                        this.eliminarEvento(event)
                        $('.calendario').fullCalendar('removeEvents', event._id);
                    }
                }
            })
        }
        
        actualizarEvento(evento) {
            let url = this.urlBase + "/update_event"
            let id = evento.id,
                start = moment(evento.start).format('YYYY-MM-DD HH:mm:ss'),
                end = evento.end != null ? moment(evento.end).format('YYYY-MM-DD HH:mm:ss'): evento.end;
            
            let ev = {
                id: id,
                start: start,
                end: end
            }
            $.post(url, ev, (response) => {
                if(response!="session"){
                    alert(response)
                }else{
                    alert("Debe iniciar session")
                    window.location.href = "http://localhost:3000/index.html"
                }
            })
        }

        cerrarSession(){
            $('.logout-container').on('click', function(event) {
                $.get('/logout', function(response) {
                    if (response == "OK") {
                        alert("Cerrando session...")
                        window.location.href = "http://localhost:3000/index.html"
                    }
                    console.log(response)
                })
            })
        }
    }

    const Manager = new EventManager()
