document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        { text: "I enjoy writing things down.", type: "linguistic" },
        { text: "I read books for pleasure.", type: "linguistic" },
        { text: "I enjoy playing with numbers and solving puzzles.", type: "logicalMathematical" },
        { text: "I like to create or listen to music.", type: "musical" },
        { text: "I can visualize things clearly in my mind.", type: "spatial" },
        { text: "I like to move around and be physically active.", type: "bodilyKinesthetic" },
        { text: "I work well with others.", type: "interpersonal" },
        { text: "I am self-aware and understand my own emotions.", type: "intrapersonal" },
        { text: "I appreciate nature and the environment.", type: "naturalist" },
        { text: "I am good at memorizing information.", type: "linguistic" },
        { text: "I can easily understand and use mathematical concepts.", type: "logicalMathematical" },
        { text: "I play a musical instrument.", type: "musical" },
        { text: "I can read maps and charts easily.", type: "spatial" },
        { text: "I participate in sports or physical activities regularly.", type: "bodilyKinesthetic" },
        { text: "I am sensitive to the moods and feelings of others.", type: "interpersonal" },
        { text: "I reflect on my thoughts and emotions.", type: "intrapersonal" },
        { text: "I like to collect rocks, shells, or other natural objects.", type: "naturalist" },
        { text: "I enjoy learning new words and phrases.", type: "linguistic" },
        { text: "I can easily solve logic puzzles.", type: "logicalMathematical" },
        { text: "I enjoy singing or humming tunes.", type: "musical" },
        { text: "I often think in images or pictures.", type: "spatial" },
        { text: "I am good at crafts and using my hands.", type: "bodilyKinesthetic" },
        { text: "I find it easy to make friends.", type: "interpersonal" },
        { text: "I set goals and plan to achieve them.", type: "intrapersonal" },
        { text: "I enjoy spending time outdoors.", type: "naturalist" },
        { text: "I like to tell stories or jokes.", type: "linguistic" },
        { text: "I enjoy experimenting and finding solutions.", type: "logicalMathematical" },
        { text: "I can pick out different instruments in a piece of music.", type: "musical" },
        { text: "I enjoy drawing or doodling.", type: "spatial" },
        { text: "I have good coordination and balance.", type: "bodilyKinesthetic" },
        { text: "I like to help others solve their problems.", type: "interpersonal" },
        { text: "I understand my strengths and weaknesses.", type: "intrapersonal" },
        { text: "I recognize different types of plants and animals.", type: "naturalist" },
        { text: "I enjoy reading and writing in my free time.", type: "linguistic" },
        { text: "I like to solve riddles and brainteasers.", type: "logicalMathematical" },
        { text: "I can remember melodies easily.", type: "musical" },
        { text: "I have a good sense of direction.", type: "spatial" },
        { text: "I enjoy dancing or acting.", type: "bodilyKinesthetic" },
        { text: "I can understand and relate to other people's feelings.", type: "interpersonal" },
        { text: "I keep a journal or diary.", type: "intrapersonal" },
        { text: "I enjoy studying the weather and natural phenomena.", type: "naturalist" },
        { text: "I like to read aloud to others.", type: "linguistic" },
        { text: "I enjoy games that require strategy and planning.", type: "logicalMathematical" },
        { text: "I notice patterns in music and sound.", type: "musical" },
        { text: "I can imagine things in three dimensions.", type: "spatial" },
        { text: "I like to build models or structures.", type: "bodilyKinesthetic" },
        { text: "I often mediate disputes between friends.", type: "interpersonal" },
        { text: "I think about the future and make plans.", type: "intrapersonal" },
        { text: "I enjoy camping, hiking, or fishing.", type: "naturalist" },
        { text: "I like to read aloud to others.", type: "linguistic" },
        { text: "I enjoy games that require strategy and planning.", type: "logicalMathematical" },
        { text: "I notice patterns in music and sound.", type: "musical" },
        { text: "I can imagine things in three dimensions.", type: "spatial" },
        { text: "I like to build models or structures.", type: "bodilyKinesthetic" },
        { text: "I often mediate disputes between friends.", type: "interpersonal" },
        { text: "I think about the future and make plans.", type: "intrapersonal" },
        { text: "I enjoy camping, hiking, or fishing.", type: "naturalist" }
    ];


    const surveyForm = document.getElementById('surveyForm');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <label>${index + 1}. ${q.question}</label>
            <input type="radio" name="q${index}" value="1"> 1
            <input type="radio" name="q${index}" value="2"> 2
            <input type="radio" name="q${index}" value="3"> 3
            <input type="radio" name="q${index}" value="4"> 4
            <input type="radio" name="q${index}" value="5"> 5
            <br><br>
        `;
        surveyForm.appendChild(div);
    });

    surveyForm.innerHTML += '<button type="submit">Submit</button>';
    
    surveyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(surveyForm);
        const scores = {
            linguistic: 0,
            logicalMathematical: 0,
            musical: 0,
            spatial: 0,
            bodilyKinesthetic: 0,
            interpersonal: 0,
            intrapersonal: 0,
            naturalist: 0
        };
        let totalQuestions = 0;

        questions.forEach((q, index) => {
            const score = formData.get(`q${index}`);
            if (score) {
                scores[q.category] += parseInt(score);
                totalQuestions++;
            }
        });

        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        const data = {
            name: name,
            email: email,
            linguistic: ((scores.linguistic / (totalQuestions / 8 * 5)) * 100).toFixed(2),
            logicalMathematical: ((scores.logicalMathematical / (totalQuestions / 8 * 5)) * 100).toFixed(2),
            musical: ((scores.musical / (totalQuestions / 8 * 5)) * 100).toFixed(2),
            spatial: ((scores.spatial / (totalQuestions / 8 * 5)) * 100).toFixed(2),
            bodilyKinesthetic: ((scores.bodilyKinesthetic / (totalQuestions / 8 * 5)) * 100).toFixed(2),
            interpersonal: ((scores.interpersonal / (totalQuestions / 8 * 5)) * 100).toFixed(2),
            intrapersonal: ((scores.intrapersonal / (totalQuestions / 8 * 5)) * 100).toFixed(2),
            naturalist: ((scores.naturalist / (totalQuestions / 8 * 5)) * 100).toFixed(2)
        };

        fetch('https://script.google.com/macros/s/AKfycbz8bKrhVIToCc-HvPuh7PMjJe0mZRX_gs0AbVhpAMk5EbXbeSwqlFkdRc2OMZaqmZ6yxA/exec', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                window.location.href = 'result.html';
            }
        });
    });
});
