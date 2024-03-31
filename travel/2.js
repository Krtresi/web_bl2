document.addEventListener('DOMContentLoaded', function() {
        // Отримання форми за допомогою JavaScript
        var surveyForm = document.querySelector('.survey-form');

        // Додавання слухача подій на подію submit форми
        surveyForm.addEventListener('submit', function(event) {
            // Заборона стандартної поведінки форми (щоб сторінка не перезавантажувалася)
            event.preventDefault();

            // Отримання значень з полів форми
            var facultyValue = document.getElementById('faculty').value;
            var streamValue = document.querySelector('input[name="stream"]:checked').value;
            var groupValues = Array.from(document.querySelectorAll('input[name="group[]"]:checked')).map(checkbox => checkbox.value);
            var interviewDateValue = document.getElementById('interviewDate').value;
            var interviewTimeValue = document.getElementById('interviewTime').value;
            var interviewWeekValue = document.getElementById('interviewWeek').value;
            var averageGradeValue = document.getElementById('averageGrade').value;

            // Збереження значень в localStorage
            localStorage.setItem('faculty', facultyValue);
            localStorage.setItem('stream', streamValue);
            localStorage.setItem('group', JSON.stringify(groupValues));
            localStorage.setItem('interviewDate', interviewDateValue);
            localStorage.setItem('interviewTime', interviewTimeValue);
            localStorage.setItem('interviewWeek', interviewWeekValue);
            localStorage.setItem('averageGrade', averageGradeValue);

            // Вивід повідомлення або виконання інших дій
            alert('Дані збережено в localStorage!');
        });

        // При завантаженні сторінки можна перевірити, чи є дані в localStorage і, якщо є, заповнити форму
        window.onload = function() {
            var savedFaculty = localStorage.getItem('faculty');
            var savedStream = localStorage.getItem('stream');
            var savedGroup = JSON.parse(localStorage.getItem('group')) || [];
            var savedInterviewDate = localStorage.getItem('interviewDate');
            var savedInterviewTime = localStorage.getItem('interviewTime');
            var savedInterviewWeek = localStorage.getItem('interviewWeek');
            var savedAverageGrade = localStorage.getItem('averageGrade');

            if (savedFaculty && savedStream && savedGroup.length > 0 && savedInterviewDate && savedInterviewTime && savedInterviewWeek && savedAverageGrade) {
                document.getElementById('faculty').value = savedFaculty;
                document.querySelector('input[name="stream"][value="' + savedStream + '"]').checked = true;
                savedGroup.forEach(value => document.getElementById('group' + value).checked = true);
                document.getElementById('interviewDate').value = savedInterviewDate;
                document.getElementById('interviewTime').value = savedInterviewTime;
                document.getElementById('interviewWeek').value = savedInterviewWeek;
                document.getElementById('averageGrade').value = savedAverageGrade;
            }
        };
    });