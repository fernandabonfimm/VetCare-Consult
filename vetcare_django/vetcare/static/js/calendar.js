document.addEventListener('DOMContentLoaded', function() {
  const calendarDays = document.getElementById('calendar');
  const monthYear = document.getElementById('monthYear');
  const prevMonth = document.getElementById('prevMonth');
  const nextMonth = document.getElementById('nextMonth');

  let currentDate = new Date();

  function loadCalendar(date) {
      calendarDays.innerHTML = '';
      const month = date.getMonth();
      const year = date.getFullYear();
      
      monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for (let i = 0; i < firstDayOfMonth; i++) {
          const emptyDiv = document.createElement('div');
          calendarDays.appendChild(emptyDiv);
      }

      for (let day = 1; day <= daysInMonth; day++) {
          const dayDiv = document.createElement('div');
          dayDiv.textContent = day;
          calendarDays.appendChild(dayDiv);
      }

      loadEvents(year, month + 1);
  }

  function loadEvents(year, month) {
      fetch(`/eventos/?year=${year}&month=${month}`)
          .then(response => response.json())
          .then(events => {
              events.forEach(event => {
                  const eventDate = new Date(event.date);
                  if (eventDate.getMonth() + 1 === month && eventDate.getFullYear() === year) {
                      const day = eventDate.getDate();
                      const dayDiv = calendarDays.children[day + new Date(year, month - 1, 1).getDay() - 1];
                      const eventDiv = document.createElement('div');
                      eventDiv.className = 'event';
                      eventDiv.textContent = event.title;
                      dayDiv.appendChild(eventDiv);
                  }
              });
          });
  }

  prevMonth.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      loadCalendar(currentDate);
  });

  nextMonth.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      loadCalendar(currentDate);
  });

  loadCalendar(currentDate);
});
