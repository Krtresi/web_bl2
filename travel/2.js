document.addEventListener('DOMContentLoaded', function () {
    const surveyForm = document.getElementById('surveyForm');
    const surveyResults = JSON.parse(localStorage.getItem('surveyResults')) || {};

    surveyForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(surveyForm);

        const userName = formData.get('userName');
        surveyResults[userName] = {};

        for (const [name, value] of formData.entries()) {
            surveyResults[userName][name] = value;
        }

        localStorage.setItem('surveyResults', JSON.stringify(surveyResults));

        alert('Результати опитування успішно збережені!');
        surveyForm.reset();
    });

    const filterTravelFrequencyUsers = () => {
        const travelFrequencyUsers = [];

        for (const userName in surveyResults) {
            const userResults = surveyResults[userName];
            if (userResults.travelFrequency === 'everymounth') {
                travelFrequencyUsers.push(userName);
            }
        }

        return travelFrequencyUsers;
    };

    const filterTravelSatisfactionUsers = () => {
        const travelSatisfactionUsers = [];

        for (const userName in surveyResults) {
            const userResults = surveyResults[userName];
            if (parseInt(userResults.satisfactionLevel) >= 7) {
                travelSatisfactionUsers.push(userName);
            }
        }

        return travelSatisfactionUsers;
    };

    const filterTravelDestinationUsers = () => {
        const travelDestinationUsers = [];

        for (const userName in surveyResults) {
            const userResults = surveyResults[userName];
            if (userResults.destinationCountry === 'usa') {
                travelDestinationUsers.push(userName);
            }
        }

        return travelDestinationUsers;
    };

    const filterTravelFrequencyWishUsers = () => {
        const travelFrequencyWishUsers = [];

        for (const userName in surveyResults) {
            const userResults = surveyResults[userName];
            if (userResults.desiredFrequency === 'weekly') {
                travelFrequencyWishUsers.push(userName);
            }
        }

        return travelFrequencyWishUsers;
    };

    const showResultsButton = document.getElementById('showResultsButton');
    showResultsButton.addEventListener('click', function () {
        showResultsButton.style.display = 'none';

        const travelResultsBody = document.getElementById('travelResultsBody');
        const extrimResultsBody = document.getElementById('extrimResultsBody');
        const sedentaryResultsBody = document.getElementById('sedentaryResultsBody');
        const travelFrequencyWishResultsBody = document.getElementById('travelFrequencyWishResultsBody');

        travelResultsBody.innerHTML = '';
        extrimResultsBody.innerHTML = '';
        sedentaryResultsBody.innerHTML = '';
        travelFrequencyWishResultsBody.innerHTML = '';

        const displayUsersWithTravelFrequency = () => {
            const travelFrequencyUsers = filterTravelFrequencyUsers();

            travelFrequencyUsers.forEach(userName => {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `<td>${userName}</td>`;
                travelResultsBody.appendChild(newRow);
            });
        };

        const displayUsersWithTravelSatisfaction = () => {
            const travelSatisfactionUsers = filterTravelSatisfactionUsers();

            travelSatisfactionUsers.forEach(userName => {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `<td>${userName}</td>`;
                extrimResultsBody.appendChild(newRow);
            });
        };

        const displayUsersWithTravelDestination = () => {
            const travelDestinationUsers = filterTravelDestinationUsers();

            travelDestinationUsers.forEach(userName => {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `<td>${userName}</td>`;
                sedentaryResultsBody.appendChild(newRow);
            });
        };

        const displayUsersWithTravelFrequencyWish = () => {
            const travelFrequencyWishUsers = filterTravelFrequencyWishUsers();

            travelFrequencyWishUsers.forEach(userName => {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `<td>${userName}</td>`;
                travelFrequencyWishResultsBody.appendChild(newRow);
            });
        };

        displayUsersWithTravelFrequency();
        displayUsersWithTravelSatisfaction();
        displayUsersWithTravelDestination();
        displayUsersWithTravelFrequencyWish();

        const surveyResultsTables = document.querySelectorAll('.survey-results');
        surveyResultsTables.forEach(table => {
            table.style.display = 'table';
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const surveyResults = JSON.parse(localStorage.getItem('surveyResults')) || {};

    const showResultsButton = document.getElementById('showResultsButton');
    showResultsButton.addEventListener('click', function () {
        showResultsButton.style.display = 'none';

        // Functions to display results
        const displayUsersWithTravelFrequency = () => {
            const travelResultsBody = document.getElementById('travelResultsBody');
            travelResultsBody.innerHTML = '';

            // Iterate through survey results and populate the table
            for (const userName in surveyResults) {
                const userResults = surveyResults[userName];
                if (userResults.travelFrequency === 'everymounth') {
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `<td>${userName}</td>`;
                    travelResultsBody.appendChild(newRow);
                }
            }
        };

        const displayUsersWithExtrim = () => {
            const extrimResultsBody = document.getElementById('extrimResultsBody');
            extrimResultsBody.innerHTML = '';

            // Iterate through survey results and populate the table
            for (const userName in surveyResults) {
                const userResults = surveyResults[userName];
                if (userResults.readyForExtreme === 'yes') {
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `<td>${userName}</td>`;
                    extrimResultsBody.appendChild(newRow);
                }
            }
        };

        const displayUsersWithSedentary = () => {
            const sedentaryResultsBody = document.getElementById('sedentaryResultsBody');
            sedentaryResultsBody.innerHTML = '';

            // Iterate through survey results and populate the table
            for (const userName in surveyResults) {
                const userResults = surveyResults[userName];
                if (userResults.activityLevel === 'sedentary') {
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `<td>${userName}</td>`;
                    sedentaryResultsBody.appendChild(newRow);
                }
            }
        };

        // Call display functions
        displayUsersWithTravelFrequency();
        displayUsersWithExtrim();
        displayUsersWithSedentary();

        // Display result tables
        const surveyResultsTables = document.querySelectorAll('.survey-results');
        surveyResultsTables.forEach(table => {
            table.style.display = 'table';
        });
    });
});
