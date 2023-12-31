$(document).ready(function() {
    var selectedDate; // Variável para armazenar a data selecionada
    var appointments = []; // Array para armazenar os agendamentos

    // Initialize the calendar
    $('#calendar').fullCalendar({
        defaultView: 'month',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        selectable: true,
        selectHelper: true,
        select: function(start, end) {
            // Handle the selected date here
            selectedDate = moment(start).format('YYYY-MM-DD');
        }
    });

    // Manipule o clique no botão "Agendar"
    $('#bookAppointment').on('click', function() {
        if (!selectedDate) {
            alert('Selecione uma data no calendário.');
            return;
        }

        var selectedTime = $('#timeslot').val();
        var appointment = 'Data: ' + selectedDate + ' Hora: ' + selectedTime;

        // Adicione o agendamento ao array de agendamentos
        appointments.push(appointment);

        // Atualize a lista de agendamentos na página
        updateScheduledDates();

        alert('Você agendou: ' + appointment);
    });

    // Função para atualizar a lista de agendamentos
    function updateScheduledDates() {
        var $scheduledDates = $('#scheduledDates');
        $scheduledDates.empty();

        for (var i = 0; i < appointments.length; i++) {
            var $appointmentItem = $('<li>').text(appointments[i]);
            $scheduledDates.append($appointmentItem);
        }
    }
});
