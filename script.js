const answers = {
  q1: "b",       // đáp án trắc nghiệm
  q2: "nine"     // đáp án điền chỗ trống
};

function submitTest() {
  let score = 0;

  // Câu trắc nghiệm
  const q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === answers.q1) score++;

  // Câu điền chỗ trống
  const q2 = document.getElementById("q2").value.trim().toLowerCase();
  if (q2 === answers.q2) score++;

  document.getElementById("result").textContent = `✅ Bạn đúng ${score}/2 câu`;
}
