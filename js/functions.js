let numbers = [];

        function addNumber() {
            const input = document.getElementById('numberInput');
            const number = parseFloat(input.value);
            if (!isNaN(number)) {
                numbers.push(number);
                updateNumberList();
                input.value = '';
            }
        }

        function updateNumberList() {
            const list = document.getElementById('numberList');
            list.innerHTML = numbers.map(num => `<div class="number-item">${num}</div>`).join('');
        }

        function findMin() {
            if (numbers.length === 0) {
                alert("The array is empty");
                return;
            }
            const min = Math.min(...numbers);
            alert(`Min number is ${min}`);
        }

        function findMax() {
            if (numbers.length === 0) {
                alert("The array is empty");
                return;
            }
            const max = Math.max(...numbers);
            alert(`Max number is ${max}`);
        }

        function calculateAverage() {
            if (numbers.length === 0) {
                alert("The array is empty");
                return;
            }
            const sum = numbers.reduce((a, b) => a + b, 0);
            const avg = sum / numbers.length;
            alert(`Average is ${avg.toFixed(2)}`);
        }

        function sortArray() {
            if (numbers.length === 0) {
                alert("The array is empty");
                return;
            }
            numbers.sort((a, b) => a - b);
            updateNumberList();
            alert('Array sorted');
        }