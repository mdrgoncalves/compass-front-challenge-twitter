import '/public/assets/styles/main.css';

export const createPostTimer = (mockupTime: boolean = false) => {

    const postTimer = document.createElement('div');
    postTimer.classList.add('post-timer');

    const postTimerText = document.createElement('p');
    postTimerText.classList.add('post-timer__text');

    const postTime = mockupTime ? new Date(2022, 0, 10).getTime() : new Date().getTime();

    setInterval(() => {
        const now = new Date().getTime();
        
        postTimerText.textContent = timeDifference(now, postTime);
    }, 1000);

    postTimer.appendChild(postTimerText);

    return postTimer;
}

function timeDifference(current: number, previous: number) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const elapsed = current - previous;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed/1000) + 's';   
    }

    else if (elapsed < msPerHour) {
        return Math.round(elapsed/msPerMinute) + 'm';   
    }

    else if (elapsed < msPerDay ) {
        return Math.round(elapsed/msPerHour ) + 'h';   
    }

    else if (elapsed < msPerMonth) {
        return Math.round(elapsed/msPerDay) + 'd';   
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed/msPerMonth) + 'mo';   
    }

    else {
        return Math.round(elapsed/msPerYear ) + 'y';   
    }
}

